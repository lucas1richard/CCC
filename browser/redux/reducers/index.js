import axios from 'axios';
import { RECEIVE_HTML, UPDATE_TAG } from '../constants';

const initialState = {
  url: '',
  tag: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_HTML:
      state = Object.assign({}, state, {html: action.payload});
      break;

    case UPDATE_TAG:
      state = Object.assign({}, state, {tag: action.payload});
      break;

    default:
      break;
  }

  return state;
};

/**
 * Make an ajax call to the server, which gets the data from the url,
 * then dispatch it to the state
 * @param {string} url - a website address
 */
export const cURL = url => dispatch => {
  axios
    .post('/api/curl', {url})
    .then(({data}) => dispatch({type: RECEIVE_HTML, payload: data}));
};

/**
 * Update the tag to highlight on the state
 * @param {string} tag - the tag to update
 */
export const updateTag = tag => dispatch => {
  dispatch({type: UPDATE_TAG, payload: tag});
};
