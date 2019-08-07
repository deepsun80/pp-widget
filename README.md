# Paypossible Widget

Widget template for Paypossible. Uses Paypal's Zoid library for implementation `(https://github.com/krakenjs/zoid)`. This is the `child portion` of the template. The respsective parent portion/page will connect to this section via the cross-domain implementation of Zoid.

1. Run `npm install` to install dependencies.
2. Run `npm start` to start the dev server in `localhost:5000`.
3. Run `npm run build` to build the minified js bundle called `ppWidget.min.js` located in the `dist` directory.
4. The `dist` directory also contains the root html page (`index.html`) as well as `widget.js`, which contains the code to create the zoid object in the parent page window DOM. The parameters for the object are passed as props from the parent page.
5. You can set the url location (local, hosted etc.) of the root page in the baseUrl variable in `dist/widget.js`.
6. The React components begin in the `components` directory, starting from `App.js`
7. `api` contains the api code using superagent.

## References

1. Zoid repository - `https://github.com/krakenjs/zoid`
2. Zoid Lesson - `https://github.com/joshgreenwell/zoid-lesson`
