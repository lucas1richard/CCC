# COGNIZANT CODING CHALLENGE #
----

To install and start:
(Your machine must have NodeJS installed, including NPM)
```bash
npm install && npm run start:dev
```

To test:
```bash
npm test
```

-----
## Notes ##

### Parsing Method ###
When the HTML string is received, `DOMParser` is used to convert it into HTML elements, which are not added to the DOM.
The HTML elements are passed to a component called `RctElement`, which displays the element as appropriate and passes its
children into further instances of `RctElement` for display.

When an `RctElement` is clicked, the application state updates `tag` to be that element `nodeName`. All RctElements receive
this tag as a property, and as such are re-rendered it changes. If the element `nodeName` matches the `tag`, the style is
updated to highlight the element.

This results in the "raw" HTML string displayed in a consistent format, which may not be identical to the source code format,
although it should contain all the same nodes.

Another much less desirable option would be to parse the string manually, leave the format identical, and detect where the
user clicked. This would result in many more edge cases (such as self closing tags, or tags with no closing tag).

### Getting the HTML string ###
AJAX requests from the browser must adhere to CORS, so attempting to submit a get request to a public site will almost always
throw an error `Header 'Access-Control-Allow-Origin' missing`. AJAX requests from the server do not have this limitation,
so the browser sends the url string to the server. After the server checks for/adds `http://` or `https://` to the string, it
completes the AJAX request to the public site and returns the HTML string to the browser.

### Technologies/Libraries Used ###
* Backend
 * NodeJS
 * Axios
 * Express
* Frontend
 * ReactJS
 * Redux
 * Axios
 * Bootstrap
* Compilation
 * Webpack with Babel
* NPM
* Testing
 * Mocha
 * Chai
 * Karma