import React from 'react';
import './RepositoryDetails.scss';

export interface RepositoryDetailsProps {
  repositoryDetails: any,
  dispatchHideRepositoryDetails?: any,
}

const RepositoryDetails: React.FC<RepositoryDetailsProps> = (props) => {
  const details = props.repositoryDetails;

  const hideDetails = () => {
    props.dispatchHideRepositoryDetails();
  }

  return (
    <div className='RepositoryDetails' onClick={hideDetails}>
      <p className='RepositoryDetails__nameWithOwner'>{ details.nameWithOwner }</p>
      <p className='RepositoryDetails__description'>{ details.description }</p>
      <p className='RepositoryDetails__url'>
        <a href={details.url} target='_blank' rel='noopener noreferrer'>
          { details.url }
        </a>
      </p>
    </div>
  );
}

export default RepositoryDetails;
