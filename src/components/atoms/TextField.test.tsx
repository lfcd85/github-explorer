import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TextField from './TextField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextField />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('calls onChange function when input value is changed', () => {
  const onChangeSpy = jest.fn();
  const wrapper = shallow(<TextField onChange={onChangeSpy} />);
  const event = {
    currentTarget: { value: 'inputted value' },
  };

  wrapper.find('input').simulate('change', event);
  expect(onChangeSpy).toHaveBeenCalledWith(event);
});
