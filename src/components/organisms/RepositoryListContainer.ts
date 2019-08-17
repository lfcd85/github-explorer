import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import RepositoryList from './RepositoryList';
import { updatePagination } from '../../actions';
import { SearchRepositoryParams } from '../../graphql/querySearchRepository';
import { AllState } from '../../store';

const mapStateToProps = (state: AllState) => ({
  searchQuery: state.searchQuery,
  repositoryDetails: state.repositoryDetails,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchUpdatePagination: (paginatedQuery: SearchRepositoryParams) => (
    dispatch(updatePagination(paginatedQuery))
  ),
});

const RepositoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList);

export default RepositoryListContainer;
