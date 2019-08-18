import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import SearchWindow from './SearchWindow';
import SearchTextField from '../molecules/SearchTextFieldContainer';
import store from '../../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <Provider store={store}>
      <SearchWindow />
    </Provider>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders one SearchTextField component', () => {
  const wrapper = shallow(<SearchWindow />);
  expect(wrapper.find(SearchTextField).length).toBe(1);
});
