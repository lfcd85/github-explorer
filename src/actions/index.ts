import actionTypes from './actionTypes';
import {
  SearchRepositoryParams,
  SearchRepositoryResult,
} from '../graphql/querySearchRepository';

export const updateSearchQuery = (value: string) => ({
  type: actionTypes.UPDATE_SEARCH_QUERY,
  value,
});

export const updatePagination = (paginatedQuery: SearchRepositoryParams) => ({
  type: actionTypes.UPDATE_PAGINATION,
  paginatedQuery,
});

export const showRepositoryDetails = (details: SearchRepositoryResult) => ({
  type: actionTypes.SHOW_REPOSITORY_DETAILS,
  details,
});

export const hideRepositoryDetails = () => ({
  type: actionTypes.HIDE_REPOSITORY_DETAILS,
});
