import React from 'react';

export interface RepositoryDetailsProps {
  repositoryDetails: any,
}

const RepositoryDetails: React.FC<RepositoryDetailsProps> = (props) => {
  const details = props.repositoryDetails;

  return (
    <div>
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
