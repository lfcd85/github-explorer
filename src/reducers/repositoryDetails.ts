import actionTypes from '../actions/actionTypes';

const repositoryDetails = (details = {}, action: any) => {
  switch (action.type) {
    case actionTypes.SHOW_REPOSITORY_DETAILS:
      return action.details;
    default:
      return details;
  }
};

export default repositoryDetails;
