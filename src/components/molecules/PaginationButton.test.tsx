import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PaginationButton from './PaginationButton';
import MenuButton from '../atoms/MenuButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PaginationButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders one MenuButton component', () => {
  const wrapper = shallow(<PaginationButton />);
  expect(wrapper.find(MenuButton).length).toBe(1);
});
