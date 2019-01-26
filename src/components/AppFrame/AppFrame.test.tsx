import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppFrame from './AppFrame';

it('renders AppFrame without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppFrame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
