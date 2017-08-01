import React from 'react';
import { connect } from 'react-redux';
import RctElement from './RctElement';

export const HTMLDisplay = ({ html, fetching, noneReceived }) => {
  if (fetching) {
    return (
      <div>
        <h3>Fetching the HTML</h3>
      </div>
    );
  }

  if (noneReceived) {
    return (
      <div>
        <h3>Invalid URL</h3>
      </div>
    );
  }
  return (
    <div id="code-display">
      {
        html ?
        <RctElement htmlProp={html} /> :
        null
      }
    </div>
  );
};

const parser = new DOMParser();

const mapStateToProps = state => ({
  html: parser.parseFromString(state.html, 'text/html'),
  fetching: state.fetching,
  noneReceived: state.noneReceived
});

export default connect(mapStateToProps)(HTMLDisplay);
