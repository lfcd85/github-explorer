import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RightArrowButton from './RightArrowButton';
import MenuButton from '../atoms/MenuButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RightArrowButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders one MenuButton component', () => {
  const wrapper = shallow(<RightArrowButton />);
  expect(wrapper.find(MenuButton).length).toBe(1);
});
