import gql from 'graphql-tag';

const querySearchRepository = gql`
  query SearchRepository(
    $query: String!,
    $first: Int,
    $after: String,
    $last: Int,
    $before: String
  ) { 
    search(
      query: $query,
      type: REPOSITORY,
      first: $first,
      after: $after,
      last: $last,
      before: $before
    ) {
      edges {
        node {
          ...on Repository {
            id
            nameWithOwner
            isArchived
            languages(first: 20) {
              edges {
                node {
                  name
                }
              }
            }
            description
            forkCount
            createdAt
            updatedAt
            url
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;

export default querySearchRepository;
