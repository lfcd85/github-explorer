import React from 'react';

export interface RepositoryListItemProps {
  repository: any,
  dispatchShowRepositoryDetails?: any,
}

const RepositoryListItem: React.FC<RepositoryListItemProps> = (props) => {
  const showDetails = () => {
    props.dispatchShowRepositoryDetails(props.repository);
  };

  return (
    <div onClick={showDetails}>
      { props.repository.nameWithOwner }
    </div>
  );
}

export default RepositoryListItem;
