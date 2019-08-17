import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SearchTextField from './SearchTextField';
import TextField from '../atoms/TextField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchTextField />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders one TextField component', () => {
  const wrapper = shallow(<SearchTextField />);
  expect(wrapper.find(TextField).length).toBe(1);
});

it('calls setState when input value is changed', () => {
  const mockDispatcher = jest.fn();
  const wrapper = shallow(
    <SearchTextField
      dispatchUpdateSearchQuery={mockDispatcher}
      dispatchHideRepositoryDetails={mockDispatcher}
    />,
  );
  const setStateSpy = jest.spyOn(wrapper, 'setState');
  const event = {
    currentTarget: { value: 'inputted value' },
  };

  wrapper.instance().onChange(event);
  expect(setStateSpy).toHaveBeenCalled();
});
