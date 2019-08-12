import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import RepositoryListItem from './RepositoryListItem';
import client from '../../apolloClient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const mockRepository = {
    id: 'id',
    nameWithOwner: 'nameWithOwner',
    description: 'description',
  };

  ReactDOM.render((<RepositoryListItem repository={mockRepository} />), div);
  ReactDOM.unmountComponentAtNode(div);
});
