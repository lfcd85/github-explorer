import React from 'react';
import ReactDOM from 'react-dom';
import RepositoryDetails from './RepositoryDetails';

export const mockRepositoryDetails = { // eslint-disable-line import/prefer-default-export
  id: 'id',
  nameWithOwner: 'nameWithOwner',
  isArchived: false,
  languages: { edges: [] },
  description: 'description',
  forkCount: 777,
  createdAt: '2017-07-07T07:07:07Z',
  updatedAt: '2018-08-08T08:08:08Z',
  url: 'dummy url',
};

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<RepositoryDetails repositoryDetails={mockRepositoryDetails} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
