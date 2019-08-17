import { connect } from 'react-redux';
import SearchPage from './SearchPage';

const mapStateToProps = (state: any) => ({
  repositoryDetails: state.repositoryDetails,
});

const mapDispatchToProps = () => {
  return Object.assign({});
};

const SearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);

export default SearchPageContainer;
