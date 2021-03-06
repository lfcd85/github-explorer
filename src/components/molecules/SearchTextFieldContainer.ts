import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import SearchTextField from './SearchTextField';
import {
  updateSearchQuery,
  hideRepositoryDetails,
} from '../../actions';

function mapStateToProps() {
  return Object.assign({});
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchUpdateSearchQuery: (value: string) => (dispatch(updateSearchQuery(value))),
  dispatchHideRepositoryDetails: () => (dispatch(hideRepositoryDetails())),
});

const SearchTextFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchTextField);

export default SearchTextFieldContainer;
