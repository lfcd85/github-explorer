import React, { useState, useEffect, MouseEvent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import PaginationButton from '../molecules/PaginationButton';
import RepositoryListItem from '../molecules/RepositoryListItemContainer';
import { repositoriesPerPage } from '../../constants/SearchPage';
import {
  querySearchRepository,
  querySearchRepositoryEdge,
} from '../../graphql/querySearchRepository';
import './RepositoryList.scss';

export interface RepositoryListProps {
  searchQuery?: any;
  dispatchUpdatePagination?: any;
}

const RepositoryList: React.FC<RepositoryListProps> = (props) => {
  const [repositories, setRepositories] = useState([]);
  const [pagination, setPagination] = useState({
    hasPreviousPage: false,
    hasNextPage: false,
  });

  const searchRepository = useQuery(
    querySearchRepository,
    { variables: props.searchQuery }
  );

  useEffect(() => {
    const { called, loading, data } = searchRepository;
    if (called && !loading && data) {
      setRepositories(data.search.edges.map((edge: querySearchRepositoryEdge) => edge.node));
      setPagination(data.search.pageInfo);
    }
  }, [searchRepository]);

  const updatePagination = (e: MouseEvent, isNext: boolean) => {
    const { query } = props.searchQuery;
    const { endCursor, startCursor } = searchRepository.data.search.pageInfo;

    if (isNext) {
      props.dispatchUpdatePagination({
        query,
        first: repositoriesPerPage,
        after: endCursor,
      });
    } else {
      props.dispatchUpdatePagination({
        query,
        last: repositoriesPerPage,
        before: startCursor,
      });
    }
  }

  return (
    <>
      <div className='RepositoryList'>
        {repositories.map((repository: any) =>
          <RepositoryListItem
            key={repository.id}
            repository={repository}
          />
        )}
      </div>
      {repositories.length > 0 &&
        <div className='RepositoryList__paginationButtonsWrapper'>
          <PaginationButton
            isNext={false}
            disabled={!pagination.hasPreviousPage}
            onClick={(e: MouseEvent) => updatePagination(e, false)}
          />
          <PaginationButton
            isNext
            disabled={!pagination.hasNextPage}
            onClick={(e: MouseEvent) => updatePagination(e, true)}
          />
        </div>
      }
    </>
  );
}

export default RepositoryList;
