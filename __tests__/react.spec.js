import React from 'react';

import App from '../browser/react/Main';
import HTMLDisplay from '../browser/react/HTMLDisplay';
import URLSearch from '../browser/react/URLSearch';
import RctElement from '../browser/react/RctElement';

import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import store from '../browser/redux/store';

const app = TestUtils.renderIntoDocument(
  <Provider store={store}>
    <App />
  </Provider>
);

describe('component', () => {
  describe('rendering the app', () => {
    it('renders without problems', function () {
      expect(app).toExist();
    });
  });

  describe('app components', () => {
    it('has a URLSearch component', () => {
      const rURLSearch = TestUtils.findRenderedComponentWithType(app, URLSearch);
      expect(rURLSearch).toExist();
    });

    describe('HTML display', () => {
      it('has a HTMLDisplay component', () => {
        const rHTMLDisplay = TestUtils.findRenderedComponentWithType(app, HTMLDisplay);
        expect(rHTMLDisplay).toExist();

        const rRctElement = TestUtils.findRenderedComponentWithType(rHTMLDisplay, RctElement);
        expect(rRctElement).toExist();
      });
    });

  });

});
