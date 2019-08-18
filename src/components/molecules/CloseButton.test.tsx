import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CloseButton from './CloseButton';
import MenuButton from '../atoms/MenuButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CloseButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders one MenuButton component', () => {
  const wrapper = shallow(<CloseButton />);
  expect(wrapper.find(MenuButton).length).toBe(1);
});
