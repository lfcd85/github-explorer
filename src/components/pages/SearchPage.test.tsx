import React from 'react';
import ReactDOM from 'react-dom';
import SearchPage from './SearchPage';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <App>
      <SearchPage />
    </App>
   ), div);
  ReactDOM.unmountComponentAtNode(div);
});
