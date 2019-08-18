import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import RepositoryList from './RepositoryList';
import client from '../../graphql/apolloClient';
import { defaultState as defaultSearchQuery } from '../../reducers/searchQuery';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <ApolloProvider client={client}>
      <RepositoryList searchQuery={defaultSearchQuery} />
    </ApolloProvider>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
