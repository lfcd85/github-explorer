import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BackToListButton from './BackToListButton';
import MenuButton from '../atoms/MenuButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BackToListButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders one MenuButton component', () => {
  const wrapper = shallow(<BackToListButton />);
  expect(wrapper.find(MenuButton).length).toBe(1);
});
