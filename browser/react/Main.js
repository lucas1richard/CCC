import React from 'react';

import URLSearch from './URLSearch';
import HTMLDisplay from './HTMLDisplay';

const requirements = [
  'Allow users to enter the URL of a public webpage',
  'From the browser, fetch the page and display the raw (not rendered) source to the users',
  'When the users click on the name of an html element in the displayed source, highlight every element matching that name e.g. clicking on a tag causes that and all similar tags to be highlighted',
  'For the front-end, please use HTML/Javascript. You can use any back-end technology you want, as long as it can be executed in a Unix environment'
];

const Main = () => {
  return (
    <div className="container" id="main-container">
      <h1 className="page-title">Cognizant Code Challenge</h1>
      <blockquote>
        <ol className="project-rules">
          {requirements.map(requirement => <li key={requirement}>{requirement}</li>)}
        </ol>
      </blockquote>
      <p className="author">
        Submitted by Richard Lucas
      </p>
      <URLSearch />
      <HTMLDisplay />
    </div>
  );
};

export default Main;

