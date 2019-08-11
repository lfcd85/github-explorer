import React from 'react';

const RepositoryListItem: React.FC<{ repository: any }> = (props) => {
  return (
    <div>{ props.repository.name }</div>
  );
}

export default RepositoryListItem;
