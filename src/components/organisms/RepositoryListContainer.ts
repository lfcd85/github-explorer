import { connect } from 'react-redux';
import RepositoryList from './RepositoryList';
import { updatePagination } from '../../actions';

const mapStateToProps = (state: any) => ({
  searchQuery: state.searchQuery,
  repositoryDetails: state.repositoryDetails,
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatchUpdatePagination: (paginatedQuery: any) => (dispatch(updatePagination(paginatedQuery))),
});

const RepositoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList);

export default RepositoryListContainer;
