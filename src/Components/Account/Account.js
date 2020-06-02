import React from 'react';
import './Account.css';

import AccountEntry from '../AccountEntry/AccountEntry';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.removeAccount = this.removeAccount.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
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

  handleNameChange(event) {
    let newAcc = {name: this.props.account.name, id: this.props.account.id, values: this.props.account.values, newName: event.target.value};
    this.setState({name: newAcc.newName});
    this.props.onNameChange(newAcc);
  }



  renderAction() {
    return <button className="Account-action" onClick={this.removeAccount}>-</button>
  }

  render() {
    return (
      <div className="Account">
        <div className="accountTitle">
          {/* <h2>{this.props.account.name}</h2> */}
          <input key={this.props.account.id}  type= 'text' value = {this.props.account.name} onChange={this.handleNameChange}></input>
          </div>
        <div className="entries">
          {
            this.props.stocks.map((holding, i) => {
              return <AccountEntry name={holding} key={`ent${i + 1}`} value={this.props.account.values[holding]} handleAmountChange = {this.handleAmountChange}/>
            })
          }
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Account;

