import React from 'react';
import './AccountsList.css';
import Account from '../Account/Account';


class AccountsList extends React.Component {

  render() {
    return (
      <div className="AccountsList">
        {
          this.props.accounts.map((account, i) => {
            return <Account account = {account} stocks = {this.props.holdings.map(holding => {return holding.name})}
            key = {`ren${i+1}`} />
          })
        }
      </div>
    );
  }
}

export default AccountsList;
