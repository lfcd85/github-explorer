import actionTypes from './actionTypes';
import { querySearchRepositoryParams } from '../graphql/querySearchRepository';

export const updateSearchQuery = (value: string) => ({
  type: actionTypes.UPDATE_SEARCH_QUERY,
  value
});

export const updatePagination = (paginatedQuery: querySearchRepositoryParams) => ({
  type: actionTypes.UPDATE_PAGINATION,
  paginatedQuery
});

export const showRepositoryDetails = (details: any) => ({
  type: actionTypes.SHOW_REPOSITORY_DETAILS,
  details
});

export const hideRepositoryDetails = () => ({
  type: actionTypes.HIDE_REPOSITORY_DETAILS,
});
