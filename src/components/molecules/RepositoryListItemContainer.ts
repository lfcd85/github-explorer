import { connect } from 'react-redux';
import RepositoryListItem from './RepositoryListItem';
import { showRepositoryDetails } from '../../actions';
import { querySearchRepositoryResult } from '../../graphql/querySearchRepository';

function mapStateToProps() {
  return Object.assign({});
}

const mapDispatchToProps = (dispatch: any) => ({
  dispatchShowRepositoryDetails: (details: querySearchRepositoryResult) => (
    dispatch(showRepositoryDetails(details))
  ),
});

const RepositoryListItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryListItem);

export default RepositoryListItemContainer;
