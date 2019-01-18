import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './css/main.scss';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';

ReactDOM.render(
  <Routes />,
  document.getElementById('addressbook-app') as HTMLElement,
);
registerServiceWorker();
