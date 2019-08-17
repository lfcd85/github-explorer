import React from 'react';
import BackToListButton from '../molecules/BackToListButton';
import {
  Language,
  SearchRepositoryResult,
} from '../../graphql/querySearchRepository';
import './RepositoryDetails.scss';

// NOTE: sets `any` types to avoid the issue below about HOCs
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31363
interface RepositoryDetailsProps {
  repositoryDetails: any;
  dispatchHideRepositoryDetails?: any;
}

const RepositoryDetails: React.FC<RepositoryDetailsProps> = (props) => {
  const details = props.repositoryDetails;

  const hideDetails = () => {
    if (props.dispatchHideRepositoryDetails) {
      props.dispatchHideRepositoryDetails();
    }
  }

  const extractDate = (dateTime: string) => new Date(dateTime).toDateString();

  const renderTags = (details: SearchRepositoryResult) => {
    let tags = [];

    if (details.isArchived) {
      tags.unshift(
        <span className='RepositoryDetails__archivedTag' key='Archived'>
          Archived
        </span>
      );
    }

    if (details.languages) {
      const langNames = details.languages.edges.map((language: Language) => language.node.name);
      Array.prototype.push.apply(tags, langNames.map((langName: string) => (
        <span className='RepositoryDetails__languageTag' key={langName}>
          {langName}
        </span>
      )));
    }

    return (tags.length === 0) ? '' : (
      <div className='RepositoryDetails__tagsWrapper'>
        {tags}
      </div>
    );
  }

  return (
    <>
      <div className='RepositoryDetails'>
        <h3 className='RepositoryDetails__nameWithOwner'>{details.nameWithOwner}</h3>
        {renderTags(details)}
        <dl>
          {details.description &&
            <>
              <dt className='RepositoryDetails__itemTitle'>Description</dt>
              <dd className='RepositoryDetails__itemContent'>{details.description}</dd>
            </>
          }

          <dt className='RepositoryDetails__itemTitle'>Forked Times</dt>
          <dd className='RepositoryDetails__itemContent'>{details.forkCount}</dd>

          <dt className='RepositoryDetails__itemTitle'>Created / Updated Date</dt>
          <dd className='RepositoryDetails__itemContent'>
            {extractDate(details.createdAt)} / {extractDate(details.updatedAt)}
          </dd>

          <dt className='RepositoryDetails__itemTitle'>URL</dt>
          <dd className='RepositoryDetails__url'>
            <a href={details.url} target='_blank' rel='noopener noreferrer'>
              {details.url}
            </a>
          </dd>
        </dl>
      </div>
      <BackToListButton onClick={hideDetails} />
    </>
  );
}

export default RepositoryDetails;
