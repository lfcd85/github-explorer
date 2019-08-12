import { combineReducers } from 'redux';
import searchQuery from './searchQuery';
import repositoryDetails from './repositoryDetails';

const rootReducer = combineReducers({
  searchQuery,
  repositoryDetails,
});

export default rootReducer;
