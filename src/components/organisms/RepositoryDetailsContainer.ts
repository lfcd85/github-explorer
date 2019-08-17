import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import RepositoryDetails from './RepositoryDetails';
import { hideRepositoryDetails } from '../../actions';
import { AllState } from '../../store';

const mapStateToProps = (state: AllState) => ({
  repositoryDetails: state.repositoryDetails,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchHideRepositoryDetails: () => (dispatch(hideRepositoryDetails())),
});

const RepositoryDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryDetails);

export default RepositoryDetailsContainer;
