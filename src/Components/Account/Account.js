import React from 'react';
import './Account.css';

import AccountEntry from '../AccountEntry/AccountEntry';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.removeAccount = this.removeAccount.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  //Handles a user deleting their account
  removeAccount() {
    this.props.onRemove(this.props.account);
  }

  //Handles a user changing the amount they have invested in their account
  handleAmountChange(amountChange) {
    amountChange.accountName = this.props.account.name;
    this.props.onAmountChange(amountChange);
  }

  

  renderAction() {
    return <button className="Account-action" onClick={this.removeAccount}>-</button>
  }

  render() {
    return (
      <div className="Account">
        <div className="accountTitle">
          {/* <h2>{this.props.account.name}</h2> */}
          <input key={this.props.key}  type= 'text' value = {this.props.account.name}></input>
          </div>
        <div className="entries">
          {
            this.props.stocks.map((holding, i) => {
              return <AccountEntry name={holding} key={`ren${i + 1}`} value={this.props.account.values[holding]} handleAmountChange = {this.handleAmountChange}/>
            })
          }
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Account;

