import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import RepositoryList from './RepositoryList';
import { updatePagination } from '../../actions';
import { querySearchRepositoryParams } from '../../graphql/querySearchRepository';
import { AllState } from '../../store';

const mapStateToProps = (state: AllState) => ({
  searchQuery: state.searchQuery,
  repositoryDetails: state.repositoryDetails,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchUpdatePagination: (paginatedQuery: querySearchRepositoryParams) => (
    dispatch(updatePagination(paginatedQuery))
  ),
});

const RepositoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList);

export default RepositoryListContainer;
