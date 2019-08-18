import React, { useState, useEffect, MouseEvent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { animateScroll } from 'react-scroll';
import PaginationButton from '../molecules/PaginationButton';
import RepositoryListItem from '../molecules/RepositoryListItemContainer';
import { repositoriesPerPage } from '../../constants/SearchPage';
import querySearchRepository, {
  SearchRepositoryEdge,
  SearchRepositoryResult,
} from '../../graphql/querySearchRepository';
import './RepositoryList.scss';

// NOTE: sets `any` types to avoid the issue below about HOCs
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31363
interface RepositoryListProps {
  searchQuery?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  dispatchUpdatePagination?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const RepositoryList: React.FC<RepositoryListProps> = props => {
  const [repositories, setRepositories] = useState([]);
  const [pagination, setPagination] = useState({
    hasPreviousPage: false,
    hasNextPage: false,
  });

  const searchRepository = useQuery(
    querySearchRepository,
    { variables: props.searchQuery },
  );

  useEffect(() => {
    const { called, loading, data } = searchRepository;
    if (called && !loading && data) {
      setRepositories(data.search.edges.map((edge: SearchRepositoryEdge) => edge.node));
      setPagination(data.search.pageInfo);
    }
  }, [searchRepository]);

  const updatePagination = (e: MouseEvent, isNext: boolean) => {
    const { query } = props.searchQuery;
    const { endCursor, startCursor } = searchRepository.data.search.pageInfo;

    if (isNext && props.dispatchUpdatePagination) {
      props.dispatchUpdatePagination({
        query,
        first: repositoriesPerPage,
        after: endCursor,
      });
      animateScroll.scrollToTop({ duration: 500 });
    } else if (props.dispatchUpdatePagination) {
      props.dispatchUpdatePagination({
        query,
        last: repositoriesPerPage,
        before: startCursor,
      });
      animateScroll.scrollToTop({ duration: 500 });
    }
  };

  const { loading, data } = searchRepository;
  const queryExists = props.searchQuery.query !== '';

  const isSearching = queryExists && loading;
  const isNotFound = queryExists && !loading && data.search.edges.length === 0;

  return (
    <>
      <div className="RepositoryList">
        {isSearching && (
          <div className="RepositoryList__isSearching">Searching...</div>
        )}
        {isNotFound && (
          <div className="RepositoryList__isNotFound">Repository Not Found.</div>
        )}
        {repositories.map((repository: SearchRepositoryResult, index: number) => (
          <RepositoryListItem
            key={repository.id}
            repository={repository}
            tabIndex={index + 1}
          />
        ))}
      </div>
      {repositories.length > 0 && (
        <div className="RepositoryList__paginationButtonsWrapper">
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
      )}
    </>
  );
};

export default RepositoryList;
