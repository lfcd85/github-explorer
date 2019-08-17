import { connect } from 'react-redux';
import SearchPage from './SearchPage';
import { AllState } from '../../store';

const mapStateToProps = (state: AllState) => ({
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
