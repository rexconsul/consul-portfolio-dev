import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'

// dev branch = create a footer component
// Merge the new component made from the dev bracnh to the staging branch (kung saan iapply doon kang branch)
// push all changes using git push origin --all

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);