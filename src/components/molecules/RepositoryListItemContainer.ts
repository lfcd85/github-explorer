import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import RepositoryListItem from './RepositoryListItem';
import { showRepositoryDetails } from '../../actions';
import { SearchRepositoryResult } from '../../graphql/querySearchRepository';

function mapStateToProps() {
  return Object.assign({});
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchShowRepositoryDetails: (details: SearchRepositoryResult) => (
    dispatch(showRepositoryDetails(details))
  ),
});

const RepositoryListItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryListItem);

export default RepositoryListItemContainer;
