import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RepositoryListItem from './RepositoryListItem';
import RightArrowButton from './RightArrowButton';
import { mockRepositoryDetails } from '../organisms/RepositoryDetails.test';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((<RepositoryListItem repository={mockRepositoryDetails} />), div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders one RightArrowButton component', () => {
  const wrapper = shallow(<RepositoryListItem repository={mockRepositoryDetails} />);
  expect(wrapper.find(RightArrowButton).length).toBe(1);
});
