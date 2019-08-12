import React from 'react';
import SearchWindow from '../organisms/SearchWindow';
import RepositoryList from '../organisms/RepositoryListContainer';
import RepositoryDetails from '../organisms/RepositoryDetailsContainer';

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
