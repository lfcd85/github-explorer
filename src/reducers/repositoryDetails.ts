import actionTypes from '../actions/actionTypes';
import { SearchRepositoryResult } from '../graphql/querySearchRepository';

interface RepositoryDetailsAction {
  type: string;
  details?: SearchRepositoryResult;
}

const repositoryDetails = (
  details: SearchRepositoryResult | {} = {},
  action: RepositoryDetailsAction,
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
