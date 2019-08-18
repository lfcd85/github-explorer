import React from 'react';
import ReactDOM from 'react-dom';
import RightArrowButton from './RightArrowButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RightArrowButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
