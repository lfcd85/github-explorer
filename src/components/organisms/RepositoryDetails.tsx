import React from 'react';

const RepositoryDetails: React.FC<{ repositoryDetails?: any }> = (props) => {
  const details = props.repositoryDetails;
  if (!details || Object.keys(details).length === 0) {
    return <></>;
  }

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
