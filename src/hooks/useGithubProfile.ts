import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type GitHubUser = {
  avatar_url: string;
  name: string;
  bio: string;
};

type RateLimitResponse = {
  resources: {
    core: {
      remaining: number;
      reset: number;
    };
  };
};

export function useGitHubProfile(username: string) {
  return useQuery<GitHubUser | null, Error>({
    queryKey: ["profile", username],
    queryFn: async () => {
      try {
        // Verifica o rate limit
        const rateLimitResponse = await axios.get<RateLimitResponse>(
          "https://api.github.com/rate_limit"
        );

        const { remaining, reset } = rateLimitResponse.data.resources.core;

        if (remaining === 0) {
          const resetTime = new Date(reset * 1000).toLocaleString();
          throw new Error(
            `Limite de requisições atingido. Tente novamente em ${resetTime}`
          );
        }

        // Tenta buscar o perfil
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        return response.data;
      } catch (err: unknown) {
        if (err instanceof Error && !axios.isAxiosError(err)) {
          throw err;
        }

        // Caso seja um erro do axios
        if (axios.isAxiosError(err)) {
          const status = err.response?.status;

          switch (status) {
            case 404:
              throw new Error(
                "Nenhum perfil foi encontrado com esse nome de usuário"
              );
            case 403:
              throw new Error(
                "Você excedeu o limite de requisições da API do GitHub."
              );
            case 401:
              throw new Error("Acesso negado. Você precisa estar autenticado.");
            default:
              throw new Error(
                "Erro ao buscar dados. Tente novamente mais tarde."
              );
          }
        }

        // Fallback para qualquer erro desconhecido
        throw new Error("Erro inesperado.");
      }
    },
    enabled: !!username,
    retry: false,
  });
}
