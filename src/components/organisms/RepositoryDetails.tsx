import React from 'react';

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
    <div onClick={hideDetails}>
      <p>{ details.nameWithOwner }</p>
      <p>{ details.description }</p>
      <p>
        <a href={details.url} target='_blank' rel='noopener noreferrer'>
          { details.url }
        </a>
      </p>
    </div>
  );
}

export default RepositoryDetails;
