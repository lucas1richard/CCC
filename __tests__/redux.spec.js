import store from '../browser/redux/store';
import { initialState, cURL, updateTag, resetState } from '../browser/redux/reducers';
import expect from 'expect';

const { dispatch, getState } = store;

describe('methods', () => {
  describe('resetState', () => {
    it('resets the state to initialState', () => {
      dispatch(resetState());
      expect(getState()).toEqual(initialState);
    });
  });

  describe('cURL', () => {
    beforeEach(() => dispatch(resetState));
    it('fetched the url', () => {
      dispatch(cURL('cognizant.com'));
      expect(getState()).toEqual({tag: '', fetching: true, noneReceived: false})
    });
  });

  describe('updateTag', () => {
    beforeEach(() => dispatch(resetState));
    it('updated the tag', () => {
    dispatch(updateTag('DIV'));
      expect(getState().tag).toEqual('DIV');
    });
  });
});
