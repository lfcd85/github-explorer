import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PageTitle from './PageTitle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageTitle />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has one h1 tag', () => {
  const wrapper = shallow(<PageTitle />);
  expect(wrapper.find('h1').length).toBe(1);
});
