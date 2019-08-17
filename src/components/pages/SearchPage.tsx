import React from 'react';
import PageTitle from '../molecules/PageTitle';
import SearchWindow from '../organisms/SearchWindow';
import RepositoryList from '../organisms/RepositoryListContainer';
import RepositoryDetails from '../organisms/RepositoryDetailsContainer';
import { querySearchRepositoryResult } from '../../graphql/querySearchRepository';

const SearchPage: React.FC<{ repositoryDetails?: querySearchRepositoryResult | {} }> = (props) => {
  const details = props.repositoryDetails;
  const isRepositorySelected = details && Object.keys(details).length > 0;

  return (
    <>
      <PageTitle title='GitHub Explorer' />
      <SearchWindow />
      {isRepositorySelected ? <RepositoryDetails /> : <RepositoryList />}
    </>
  );
}

export default SearchPage;
