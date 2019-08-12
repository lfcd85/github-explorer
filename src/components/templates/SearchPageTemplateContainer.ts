import { connect } from 'react-redux';
import SearchPageTemplate from './SearchPageTemplate';

const mapStateToProps = (state: any) => ({
  repositoryDetails: state.repositoryDetails,
});

const mapDispatchToProps = () => {
  return Object.assign({});
};

const SearchPageTemplateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageTemplate);

export default SearchPageTemplateContainer;
