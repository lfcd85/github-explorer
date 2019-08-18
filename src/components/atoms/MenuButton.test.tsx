import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MenuButton from './MenuButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has one button tag', () => {
  const wrapper = shallow(<MenuButton />);
  expect(wrapper.find('button').length).toBe(1);
});
