import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type GitHubUser = {
  avatar_url: string;
  name: string;
  bio: string;
};

export function useGitHubProfile(username: string) {
  return useQuery<GitHubUser>({
    queryKey: ["profile", username],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      return response.data;
    },
    enabled: !!username, // só executa quando tiver username
    retry: false,
  });
}
