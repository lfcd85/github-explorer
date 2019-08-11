import React from 'react';
import SearchWindow from '../organisms/SearchWindow';
import RepositoryList from '../organisms/RepositoryListContainer';
import RepositoryDetails from '../organisms/RepositoryDetails';

const SearchPageTemplate: React.FC = () => {
  return (
    <>
      <SearchWindow />
      <RepositoryList />
      <RepositoryDetails />
    </>
  );
}

export default SearchPageTemplate;
