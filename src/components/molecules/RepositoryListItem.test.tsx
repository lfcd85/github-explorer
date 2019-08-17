import React from 'react';
import ReactDOM from 'react-dom';
import RepositoryListItem from './RepositoryListItem';

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
