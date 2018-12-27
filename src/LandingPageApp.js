import React from 'react';
import LandingPage from './LandingPage';
import ReactDOM from 'react-dom';

// ReactDOM.hydrate is used to ensure that client renders the same content that was sent by the server
// Despite of that, this is the same as ReactDOM.render.
// This should print out the warning, because we render slightly different LandingPage on client-side.
ReactDOM.hydrate(<LandingPage />, document.getElementById('main-app-container'));

// Exporting LandingPageApp to work with "prerender-loader"
export default () => {
    // Using import() to give webpack a hint that we don't need ReactDOMServer in our client.
    // Though, it still will be packed into a bundle and available to the client.
    // You may want to check .babelrc to see how dynamic imports were enabled.
    import("react-dom/server").then((ReactDOMServer) => ReactDOMServer.renderToString(<LandingPage />));
}
