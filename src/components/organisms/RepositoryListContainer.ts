import { connect } from 'react-redux';
import RepositoryList from './RepositoryList';

const mapStateToProps = (state: any) => ({
  searchQuery: state.searchQuery,
});

const mapDispatchToProps = () => {
  return Object.assign({});
};

const RepositoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList);

export default RepositoryListContainer;
