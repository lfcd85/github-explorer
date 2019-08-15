import actionTypes from '../actions/actionTypes';
import { repositoriesPerPage } from '../constants/SearchPage';

const defaultState = {
  query: '',
  first: repositoriesPerPage,
};

const searchQuery = (state = defaultState, action: any) => {
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
