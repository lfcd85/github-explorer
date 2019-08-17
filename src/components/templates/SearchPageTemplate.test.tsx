import React from 'react';
import ReactDOM from 'react-dom';
import SearchPageTemplate from './SearchPageTemplate';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <App>
      <SearchPageTemplate />
    </App>
   ), div);
  ReactDOM.unmountComponentAtNode(div);
});
