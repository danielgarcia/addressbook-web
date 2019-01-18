import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

it('renders Dashboard without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
