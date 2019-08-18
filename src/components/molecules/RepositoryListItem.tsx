import React from 'react';
import { Dispatch } from 'redux';
import RightArrowButton from './RightArrowButton';
import { SearchRepositoryResult } from '../../graphql/querySearchRepository';
import './RepositoryListItem.scss';

interface RepositoryListItemProps {
  repository: SearchRepositoryResult;
  dispatchShowRepositoryDetails?: (details: SearchRepositoryResult) => Dispatch;
  tabIndex: number;
}

const RepositoryListItem: React.FC<RepositoryListItemProps> = props => {
  const showDetails = () => {
    if (props.dispatchShowRepositoryDetails) {
      props.dispatchShowRepositoryDetails(props.repository);
    }
  };

  return (
    <div
      className="RepositoryListItem"
      onClick={showDetails}
      onKeyPress={showDetails}
      role="link"
      tabIndex={props.tabIndex}
    >
      <div className="RepositoryListItem__main">
        <div className="RepositoryListItem__nameWithOwner">
          {props.repository.nameWithOwner}
        </div>
        {props.repository.description && (
          <div className="RepositoryListItem__description">
            {props.repository.description}
          </div>
        )}
      </div>
      <RightArrowButton />
    </div>
  );
};

export default RepositoryListItem;
