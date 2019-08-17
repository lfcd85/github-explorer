import actionTypes from '../actions/actionTypes';
import { querySearchRepositoryResult } from '../graphql/querySearchRepository';

interface repositoryDetailsAction {
  type: string;
  details?: querySearchRepositoryResult;
}

const repositoryDetails = (
  details: querySearchRepositoryResult | {} = {},
  action: repositoryDetailsAction
) => {
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
