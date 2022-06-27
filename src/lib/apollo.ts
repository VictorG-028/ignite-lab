import { ApolloClient, InMemoryCache } from "@apollo/client";

// A lib apollo 
// 1. Faz a conexão com a api do graphCMS
// 2. Se integra bem com React
// 3. Permite evitar utilizar o fetch() padrão, 
// uma vez que a lib é um wrapper com melhorias no fetch()

// Variáveis de ambiente devem estar no arquivo .env.local

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache()
});
