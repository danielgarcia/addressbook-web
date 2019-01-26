import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppFrame from './components/AppFrame/AppFrame';

import Home from './pages/Home/Home';

const history = createBrowserHistory();

/**
 * Application routes.
 */
const routes = {
  Home: '/',
};

class Routes extends React.Component {
  public render() {
    return (
      <HashRouter>
        <Route exact path="/">
          <AppFrame>
            <Switch>
              <Route exact path={routes.Home} component={Home} />
            </Switch>
          </AppFrame>
        </Route>
      </HashRouter>
    );
  }
}

export default Routes;
export { history };
