import React from 'react';

import App from '../browser/react/Main';

import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import store from '../browser/redux/store';

describe('component', () => {
  describe('app', function () {
    it('renders without problems', function () {
      var app = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <App />
        </Provider>
      );

      expect(app).toExist();
    });
  });
});
