import React from 'react';
import './Account.css';

import AccountEntry from '../AccountEntry/AccountEntry';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.removeAccount = this.removeAccount.bind(this);
  }

  removeAccount() {
    this.props.onRemove(this.props.account);
  }

  renderAction() {
    return <button className="Account-action" onClick={this.removeAccount}>-</button>
  }

  render() {
    return (
      <div className="Account">
        <div className="accountTitle"><h2>{this.props.account.name}</h2></div>
        <div className="entries">
          {
            this.props.stocks.map((holding, i) => {
              return <AccountEntry name={holding} value={this.props.account.values[holding]}
                key={`ren${i + 1}`} />
            })
          }
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Account;

