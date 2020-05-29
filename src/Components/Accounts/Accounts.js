import React from 'react';
import './Accounts.css';
import AccountsList from '../AccountsList/AccountsList';

class Accounts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Account">
        <h2>Your Accounts</h2>
        <AccountsList />
        {/* <button className="AccountsButton" onClick = {this.addAccount}>+</button> */}
      </div>
    );
  }
}

export default Accounts;
