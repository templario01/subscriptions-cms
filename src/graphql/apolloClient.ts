import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
})
