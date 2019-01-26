import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

/**
 * MakeTiny state interface.
 */
interface ContactsState {
  test: boolean;
  testStr: string;
}

class Contacts extends React.Component<RouteComponentProps<{}>, ContactsState> {
  constructor(props: RouteComponentProps<{}>) {
      super(props);
  };

  public render () {
    return (
      <div className="contacts-page">
        <div className="search-bar">
          <input type="text" placeholder="Search Contacts" />
        </div>

        <div className="contacts-controls">
          <h1>Address Book</h1>
          <button>Add Contact</button>
        </div>

        <table className="contacts-table">
          <thead>
            <tr>
              <th className="col-1"></th>
              <th className="col-2"></th>
              <th className="col-3">Name</th>
              <th className="col-4">Address</th>
              <th className="col-5">Phone</th>
              <th className="col-6">E-mail</th>
              <th className="col-7">Social</th>
              <th className="col-8"></th>
              <th className="col-9"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col-1"></td>
              <td className="col-2"><div className="picture-placeholder"><span>DA</span></div></td>
              <td className="col-3">Daniel Garcia Alanis</td>
              <td className="col-4">
                <div className="address">
                  <span className="street">934 N. Cahuenga</span>
                  <span className="street2">Apt. 204</span>
                  <span className="city">Los Angeles</span>
                  <span className="state">CA</span>
                  <span className="zipcode">90037</span>
                  <span className="country">USA</span>
                </div>
              </td>
              <td className="col-5">(334) 435-5432</td>
              <td className="col-6">daniel@daniel.com</td>
              <td className="col-7">F T P</td>
              <td className="col-8">Edit</td>
              <td className="col-9">Move</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;