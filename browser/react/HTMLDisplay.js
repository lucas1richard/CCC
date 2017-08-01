import React from 'react';
import { connect } from 'react-redux';
import RctElement from './RctElement';

class HTMLDisplay extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.findElement = this.findElement.bind(this);
    this.parser = new DOMParser();
  }

  findElement(ev) {
    console.log(this.parser.parseFromString(ev.target.innerHTML, 'text/html'));
  }

  render() {
    return (
      <div
        style={{background: '#f2f2f2'}}
        onClick={this.findElement}
      >
        {this.props.html ? <RctElement htmlProp={this.props.html} /> : null}
      </div>
    );
  }
}

const parser = new DOMParser();

const mapStateToProps = state => ({
  html: parser.parseFromString(state.html, 'text/html')
});

export default connect(mapStateToProps)(HTMLDisplay);
