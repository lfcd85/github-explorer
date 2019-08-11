import actionTypes from '../actions/actionTypes';

const searchQuery = (state = '', action: any) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH_QUERY:
      return action.value;
    default:
      return state;
  }
}

export default searchQuery;
