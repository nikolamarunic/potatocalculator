import React from 'react';
import './Account.css';

import AccountEntry from '../AccountEntry/AccountEntry';

class Account extends React.Component {
  constructor(props){
    super(props);

  }

  removeAccount() {
    //TODO
    return;
  }

  renderAction() {
    return <button className = "Account-action" onClick = {this.removeAccount}>-</button>
  }

  render() {
    return (
      <div className="Account">
        <div className="AccountsList">
        {
          this.props.stocks.map((holding, i) => {
            console.log(this.props.account.values);
            console.log(this.props.account.values[holding]);
            return <AccountEntry name = {holding} value = {this.props.account.values[holding]}
            key = {`ren${i+1}`} />
          })
        }
      </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Account;

