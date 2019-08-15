import React from 'react';
import ReactDOM from 'react-dom';
import MenuButton from './MenuButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
