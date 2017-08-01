import React from 'react';

import App from '../browser/react/Main';
import { HTMLDisplay } from '../browser/react/HTMLDisplay';

const parser = new DOMParser();

console.log(HTMLDisplay);

import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import store from '../browser/redux/store';

describe('component', () => {
  // describe('app', function () {
  //   it('renders without problems', function () {
  //     var app = TestUtils.renderIntoDocument(
  //       <Provider store={store}>
  //         <App />
  //       </Provider>
  //     );

  //     expect(app).toExist();
  //   });
  // });

  describe('<HTMLDisplay />', function () {
    let div;
    // beforeEach(() => {
    // });
    
    it('renders without problems', function () {
      div = document.createElement('div');
      var rctelem = TestUtils.renderIntoDocument(
        <HTMLDisplay html={parser.parseFromString('<div></div>', 'text/html')} tag="DIV" setTag={() => {}} store={store} />
      );

      expect(rctelem).toExist();
    });
  });
});
