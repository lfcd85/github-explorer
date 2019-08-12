import actionTypes from './actionTypes';

export const updateSearchQuery = (value: any) => ({
  type: actionTypes.UPDATE_SEARCH_QUERY,
  value
});

export const showRepositoryDetails = (details: any) => ({
  type: actionTypes.SHOW_REPOSITORY_DETAILS,
  details
});
