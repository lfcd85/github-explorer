import React from 'react';
import './PageTitle.scss';

const PageTitle: React.FC<{ title: string }> = props => (
  <a href="/">
    <h1 className="PageTitle">{props.title}</h1>
  </a>
);

export default PageTitle;
