import React from 'react';
import { connect } from 'react-redux';
import { cURL } from '../redux/reducers';

export class URLSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      url: 'cognizant.com'
    };

    this.changeUrl = this.changeUrl.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeUrl(ev) {
    this.setState({url: ev.target.value});
  }

  submitForm(ev) {
    ev.preventDefault();
    this.props.getHTML(this.state.url);
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Public URL"
            value={this.state.url}
            onChange={this.changeUrl}
          />
          <span className="input-group-btn">
            <button className="btn btn-primary">
              Get HTML
            </button>
          </span>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getHTML: url => dispatch(cURL(url))
});

export default connect(null, mapDispatchToProps)(URLSearch);
