import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LeftMenu from './LeftMenu';

it('renders LeftMenu without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeftMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
