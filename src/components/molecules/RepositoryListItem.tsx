import React from 'react';
import { Dispatch } from 'redux';
import { SearchRepositoryResult } from '../../graphql/querySearchRepository';
import './RepositoryListItem.scss';

interface RepositoryListItemProps {
  repository: SearchRepositoryResult;
  dispatchShowRepositoryDetails?: (details: SearchRepositoryResult) => Dispatch;
}

const RepositoryListItem: React.FC<RepositoryListItemProps> = props => {
  const showDetails = () => {
    if (props.dispatchShowRepositoryDetails) {
      props.dispatchShowRepositoryDetails(props.repository);
    }
  };

  return (
    <div className="RepositoryListItem" onClick={showDetails}>
      <div className="RepositoryListItem__nameWithOwner">
        {props.repository.nameWithOwner}
      </div>
      {props.repository.description && (
        <div className="RepositoryListItem__description">
          {props.repository.description}
        </div>
      )}
    </div>
  );
};

export default RepositoryListItem;
