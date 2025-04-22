# <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="30" height="30"/> **GitHub Profile Search**

## 📝 **Sobre o Projeto**

O **GitHub Profile Search** permite aos usuários buscar perfis do GitHub, exibindo nome, foto de perfil e bio do usuário, com design inspirado no Figma. O projeto implementa o tratamento de **rate limit** da API do GitHub para garantir uma experiência fluida, mesmo com limitações de requisições.

---

## ⚡ **Funcionalidades Principais**

- **Busca Rápida**: Pesquise facilmente por qualquer perfil do GitHub.
- **Exibição de Informações**: Mostra nome, foto e bio do usuário.
- **Tratamento de Erros**: Exibe mensagens claras em caso de erro.
- **Rate Limit**: Informações sobre o tempo restante após atingir o limite de requisições.
- **Skeleton Loaders**: Exibição de placeholders durante o carregamento.
- **Animações Fluídas**: Transições suaves com **Framer Motion**.
- **Design Responsivo**: Funciona bem em dispositivos móveis e desktop.

---

## 🎨 **Tecnologias Utilizadas**

- **React**
- **TypeScript**
- **TanStack Query**
- **Framer Motion**
- **Tailwind CSS**
- **Axios**
- **Skeleton Loaders**

---

## 🔧 **Como Funciona**

- **Busca de Perfil**: O usuário insere o nome de um usuário GitHub no campo de busca.
- **Exibição das Informações**: A aplicação faz uma requisição para a API do GitHub e, se o perfil for encontrado, exibe o nome, foto de perfil e a bio.
- **Skeleton Loaders**: Durante a requisição, placeholders animados são exibidos.
- **Tratamento de Erros**: Mensagens explicativas são mostradas quando o perfil não é encontrado ou o limite de requisições é atingido.
- **Rate Limit**: O usuário é informado sobre o tempo restante para novas requisições após exceder o limite.

---

## ⚠️ **Rate Limit da API do GitHub**

A API do GitHub permite até 60 requisições por hora para usuários não autenticados. Quando o limite é atingido, a aplicação informa o tempo restante para novas requisições.

---

## 🧑‍💻 **Melhorias Futuras**

- **Autenticação GitHub**: Implementar autenticação para aumentar o limite de requisições.
- **Armazenamento Local**: Cache de perfis para otimizar requisições.
- **Efeitos de Carregamento**: Transições e efeitos de loading mais dinâmicos.
- **Aprimorar a UI**: Melhorias na estilização com base em feedbacks.

---

## 📝 **Contribua**

Este projeto está aberto a contribuições! Se encontrou algum bug ou tem sugestões, abra uma **issue** ou envie um **pull request**.

---

## 🛠️ **Como Rodar o Projeto**

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/git-profile-search.git
2. **Instalar dependências**:

   ```bash
   npm install
3. **Iniciar a aplicação**:

   ```bash
   npm start
