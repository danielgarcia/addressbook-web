import * as React from 'react';
import { RouteComponentProps, NavLink } from 'react-router-dom';

/**
 * MakeTiny state interface.
 */
interface HomeState {
  test: boolean;
  testStr: string;
}

class Home extends React.Component<RouteComponentProps<{}>, HomeState> {
  constructor(props: RouteComponentProps<{}>) {
      super(props);
  };

  public render () {
    return (
      <div className="home-page">
        Home Page
        <NavLink exact to="/">Home</NavLink>
        <br />
        <NavLink to="/login">Login</NavLink>
      </div>
    );
  }
}

export default Home;