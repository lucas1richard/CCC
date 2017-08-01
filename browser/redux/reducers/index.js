import axios from 'axios';
import {
  RECEIVE_HTML,
  UPDATE_TAG,
  FETCHING_HTML,
  NO_HTML_RETURNED
} from '../constants';

const initialState = {
  // currentUrl: 'cognizant.com',
  tag: '',
  fetching: false,
  noneReceived: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_HTML:
      state = Object.assign({}, state, {html: action.payload, noneReceived: false, fetching: false});
      break;

    case UPDATE_TAG:
      state = Object.assign({}, state, {tag: action.payload});
      break;

    case NO_HTML_RETURNED:
      state = Object.assign({}, state, {noneReceived: true, fetching: false});
      break;

    case FETCHING_HTML:
      state = Object.assign({}, state, {fetching: true});
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
  dispatch({type: FETCHING_HTML});
  axios
    .post('/api/curl', {url})
    .then(({data}) => dispatch({type: RECEIVE_HTML, payload: data}))
    .catch(() => dispatch({type: NO_HTML_RETURNED}));
};

/**
 * Update the tag to highlight on the state
 * @param {string} tag - the tag to update
 */
export const updateTag = tag => dispatch => {
  dispatch({type: UPDATE_TAG, payload: tag});
};
