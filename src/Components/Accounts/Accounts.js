import React from 'react';
import './Accounts.css';
import AccountsList from '../AccountsList/AccountsList';

class Accounts extends React.Component {
  constructor(props) {
    super(props);

    this.addAccount = this.addAccount.bind(this);
  }

  addAccount() {
    return;
  }

  render() {
    return (
      <div className="Account">
        <h2>Your Accounts</h2>
        <AccountsList accounts = {this.props.accounts} holdings = {this.props.holdings}/>
        <button className="AccountsButton" onClick = {this.addAccount}>+</button>
      </div>
    );
  }
}

export default Accounts;
