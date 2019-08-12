import actionTypes from '../actions/actionTypes';

const repositoryDetails = (details = {}, action: any) => {
  switch (action.type) {
    case actionTypes.SHOW_REPOSITORY_DETAILS:
      return action.details;
    case actionTypes.HIDE_REPOSITORY_DETAILS:
      return {};
    default:
      return details;
  }
};

export default repositoryDetails;
