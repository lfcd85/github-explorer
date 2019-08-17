import React from 'react';
import SearchTextField from '../molecules/SearchTextFieldContainer';
import './SearchWindow.scss';

const SearchWindow: React.FC = () => (
  <section className="SearchWindow">
    <SearchTextField />
  </section>
);

export default SearchWindow;
