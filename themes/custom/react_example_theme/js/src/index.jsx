import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

// # Example 1: Simple "Hello, World" code
/*ReactDOM.render(
  <h1>Hello there - world!</h1>,
  document.getElementById('react-app')
);
*/

/* Import Components */
import DrupalProjectStats from './components/DrupalProjectStats';

const Main = hot(() => (
  <DrupalProjectStats projectName="drupal" />
));

ReactDOM.render(<Main/>, document.getElementById('react-app'));
