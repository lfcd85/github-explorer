import { connect } from 'react-redux';
import RepositoryListItem from './RepositoryListItem';
import { showRepositoryDetails } from '../../actions';

function mapStateToProps() {
  return Object.assign({});
}

const mapDispatchToProps = (dispatch: any) => ({
  dispatchShowRepositoryDetails: (details: any) => (dispatch(showRepositoryDetails(details))),
});

const RepositoryListItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryListItem);

export default RepositoryListItemContainer;
