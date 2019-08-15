import React from 'react';
import ReactDOM from 'react-dom';
import PaginationButton from './PaginationButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PaginationButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
