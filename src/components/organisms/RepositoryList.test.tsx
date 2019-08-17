import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import RepositoryList from './RepositoryList';
import client from '../../graphql/apolloClient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <ApolloProvider client={client}>
      <RepositoryList />
    </ApolloProvider>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});