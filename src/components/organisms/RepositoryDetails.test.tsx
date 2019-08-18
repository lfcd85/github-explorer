import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RepositoryDetails from './RepositoryDetails';
import CloseButton from '../molecules/CloseButton';
import BackToListButton from '../molecules/BackToListButton';

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

const defaultComponent = <RepositoryDetails repositoryDetails={mockRepositoryDetails} />;

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(defaultComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders CloseButton and BackToListButton component', () => {
  const wrapper = shallow(defaultComponent);
  expect(wrapper.find(CloseButton).length).toBe(1);
  expect(wrapper.find(BackToListButton).length).toBe(1);
});
