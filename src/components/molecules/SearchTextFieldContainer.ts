import { connect } from 'react-redux';
import SearchTextField from './SearchTextField';
import { updateSearchQuery } from '../../actions';

function mapStateToProps() {
  return Object.assign({});
}

const mapDispatchToProps = (dispatch: any) => ({
  dispatchUpdateSearchQuery: (value: string) => (dispatch(updateSearchQuery(value))),
});

const SearchTextFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTextField);

export default SearchTextFieldContainer;
