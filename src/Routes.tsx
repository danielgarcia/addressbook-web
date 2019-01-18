import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';

import Header from './components/Header/Header';
import LeftMenu from './components/LeftMenu/LeftMenu';

const history = createBrowserHistory();

class Routes extends React.Component {
  public render() {
    return (
      <Router history={ history } >
        <div>
          <Header />
          <LeftMenu />
          <Switch>
            <Route exact path="/login" component={ Login } />
            <Route exact path="/" component={ Dashboard } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
export { history };
