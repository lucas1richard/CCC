import store from '../browser/redux/store';
import { initialState, cURL, updateTag, resetState } from '../browser/redux/reducers';
import expect from 'expect';

const { dispatch, getState } = store;

describe('methods', () => {
  beforeEach(() => dispatch(resetState));
  describe('resetState', () => {
    it('resets the state to initialState', () => {
      dispatch(resetState());
      expect(getState()).toEqual(initialState);
    });
  });

  describe('cURL', () => {
    beforeEach(() => dispatch(resetState));
    it('fetched the url', () => {
      dispatch(cURL('cognizant.com'), () => {
        expect(getState()).toEqual({tag: '', fetching: false, noneReceived: false});
        dispatch(updateTag('DIV'));
        expect(getState()).toEqual({tag: 'DIV', fetching: false, noneReceived: false});
      })
    });
  });
});
