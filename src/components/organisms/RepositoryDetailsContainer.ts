import { connect } from 'react-redux';
import RepositoryDetails from './RepositoryDetails';

const mapStateToProps = (state: any) => ({
  repositoryDetails: state.repositoryDetails,
});

const mapDispatchToProps = () => {
  return Object.assign({});
};

const RepositoryDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryDetails);

export default RepositoryDetailsContainer;
