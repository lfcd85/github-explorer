import ApolloClient from 'apollo-boost';

const token = process.env.REACT_APP_GITHUB_GRAPHQL_API_TOKEN;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: { authorization: token ? `Bearer ${token}` : '' },
});

export default client;
