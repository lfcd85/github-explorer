import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import RepositoryListItem from '../molecules/RepositoryListItemContainer';
import './RepositoryList.scss';

const RepositoryList: React.FC<{ searchQuery?: string }> = (props) => {
  const [repositories, setRepositories] = useState([]);

  const searchRepository = useQuery(gql`
    query SearchRepository($query: String!) { 
      search(query: $query, type: REPOSITORY, first: 10) {
        edges {
          node {
            ...on Repository {
              id,
              nameWithOwner,
              isArchived,
              languages(first: 20) {
                edges {
                  node {
                    name
                  }
                }
              },
              description,
              forkCount,
              createdAt,
              updatedAt,
              url,
            }
          }
        }
      }
    }`,
    { variables: { query: props.searchQuery } },
  );

  useEffect(() => {
    const { called, loading, data } = searchRepository;
    if (called && !loading && data) {
      setRepositories(data.search.edges.map((item: any) => item.node));
    }
  }, [searchRepository]);

  return (
    <div className='RepositoryList'>
      {repositories.map((repository: any) =>
        <RepositoryListItem
          key={repository.id}
          repository={repository}
        />
      )}
    </div>
  );
}

export default RepositoryList;
