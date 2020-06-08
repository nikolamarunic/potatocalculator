import React from 'react';
import './Accounts.css';
import AccountsList from '../AccountsList/AccountsList';

class Accounts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accountId: 3 //By default 3 accounts available
    }
    this.addAccount = this.addAccount.bind(this);
  }


  //Handles a user adding a new account to their portfolio
  addAccount() {
    let values = {}
    //By default have nothing invested in the account
    this.props.holdings.map(holding => {
      values[holding.name] = 0;
      return 0;
    });
    let newId = this.state.accountId + 1
    this.setState({ accountId: newId });

    let tempAcc = { name: "New Account", values: values, id: newId, limit: -1 };

    this.props.onAdd(tempAcc);
  }

  render() {
    return (
      <div className="AccountHolder">
        <h2 className="accountsTitle">Your Accounts</h2>
        <AccountsList accounts={this.props.accounts} holdings={this.props.holdings} changes={this.props.changes} onNewLimit={this.props.onNewLimit}
          onRemove={this.props.onRemove} onAmountChange={this.props.onAmountChange} onNameChange={this.props.onNameChange} />
        <button className="AccountsButton" onClick={this.addAccount}>+</button>
      </div>
    );
  }
}

export default Accounts;
