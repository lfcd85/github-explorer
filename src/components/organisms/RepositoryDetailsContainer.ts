import { connect } from 'react-redux';
import RepositoryDetails from './RepositoryDetails';
import { hideRepositoryDetails } from '../../actions';

const mapStateToProps = (state: any) => ({
  repositoryDetails: state.repositoryDetails,
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatchHideRepositoryDetails: () => (dispatch(hideRepositoryDetails())),
});

const RepositoryDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryDetails);

export default RepositoryDetailsContainer;
