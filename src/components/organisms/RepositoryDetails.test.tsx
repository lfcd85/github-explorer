import React from 'react';
import ReactDOM from 'react-dom';
import RepositoryDetails from './RepositoryDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const mockRepositoryDetails = {
    id: 'id',
    nameWithOwner: 'nameWithOwner',
    description: 'description',
  };

  ReactDOM.render(<RepositoryDetails repositoryDetails={mockRepositoryDetails} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
