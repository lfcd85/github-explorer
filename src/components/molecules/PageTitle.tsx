import React from 'react';
import './PageTitle.scss';

const PageTitle: React.FC<{ title: string }> = props => (
  <h1 className="PageTitle">{props.title}</h1>
);

export default PageTitle;
