import React from 'react';
import './Accounts.css';
import AccountsList from '../AccountsList/AccountsList';

class Accounts extends React.Component {
  constructor(props) {
    super(props);

    this.addAccount = this.addAccount.bind(this);
  }

  //Handles a user adding a new account to their portfolio
  addAccount() {
    let values = {}
    //By default have nothing invested in the account
    this.props.holdings.map(holding => {
      values[holding.name] = 0;
    });

    let tempStock = {name: "New Account", values: values};
    this.props.onAdd(tempStock);
  }

  render() {
    return (
      <div className="Account">
        <h2>Your Accounts</h2>
        <AccountsList accounts = {this.props.accounts} holdings = {this.props.holdings}
        onRemove = {this.props.onRemove} onAmountChange = {this.props.onAmountChange}/>
        <button className="AccountsButton" onClick = {this.addAccount}>+</button>
      </div>
    );
  }
}

export default Accounts;
