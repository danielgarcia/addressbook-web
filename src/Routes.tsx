import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppFrame from './components/AppFrame/AppFrame';

import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';

const history = createBrowserHistory();

/**
 * Application routes.
 */
const routes = {
  Home: '/',
  Contacts: '/contacts',
};

class Routes extends React.Component {
  public render() {
    return (
      <HashRouter>
        <Route exact path="/">
          <AppFrame>
            <Switch>
              <Route exact path={routes.Home} component={Home} />
              <Route exact path={routes.Contacts} component={Contacts} />
            </Switch>
          </AppFrame>
        </Route>
      </HashRouter>
    );
  }
}

export default Routes;
export { history };
