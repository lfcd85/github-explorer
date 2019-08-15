import React from 'react';
import ReactDOM from 'react-dom';
import BackToListButton from './BackToListButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BackToListButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
