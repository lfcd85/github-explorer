import React from 'react';
import SearchWindow from '../organisms/SearchWindow';
import RepositoryList from '../organisms/RepositoryListContainer';
import RepositoryDetails from '../organisms/RepositoryDetailsContainer';

const SearchPageTemplate: React.FC<{ repositoryDetails?: any }> = (props) => {
  const details = props.repositoryDetails;
  const isRepositorySelected = details && Object.keys(details).length > 0;

  return (
    <>
      <SearchWindow />
      {isRepositorySelected ? <RepositoryDetails /> : <RepositoryList />}
    </>
  );
}

export default SearchPageTemplate;
