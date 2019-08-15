import React from 'react';
import './RepositoryListItem.scss';

export interface RepositoryListItemProps {
  repository: any,
  dispatchShowRepositoryDetails?: any,
}

const RepositoryListItem: React.FC<RepositoryListItemProps> = (props) => {
  const showDetails = () => {
    props.dispatchShowRepositoryDetails(props.repository);
  };

  return (
    <div className='RepositoryListItem' onClick={showDetails}>
      <div className='RepositoryListItem__nameWithOwner'>
        {props.repository.nameWithOwner}
      </div>
      {props.repository.description &&
        <div className='RepositoryListItem__description'>
          {props.repository.description}
        </div>
      }
    </div>
  );
}

export default RepositoryListItem;
