import actionTypes from '../actions/actionTypes';
import { repositoriesPerPage } from '../constants/SearchPage';
import { SearchRepositoryParams } from '../graphql/querySearchRepository';

const defaultState = {
  query: '',
  first: repositoriesPerPage,
};

interface searchQueryAction {
  type: string;
  value?: string;
  paginatedQuery?: SearchRepositoryParams;
}

const searchQuery = (
  state: SearchRepositoryParams = defaultState,
  action: searchQueryAction
) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH_QUERY:
      return {
        query: action.value,
        first: repositoriesPerPage,
      };
    case actionTypes.UPDATE_PAGINATION:
      return action.paginatedQuery;
    default:
      return state;
  }
};

export default searchQuery;
