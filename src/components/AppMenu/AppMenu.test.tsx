import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppMenu from './AppMenu';

it('renders AppMenu without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
