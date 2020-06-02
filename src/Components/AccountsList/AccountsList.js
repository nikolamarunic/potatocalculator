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
            key = {`acc${i+1}`} onRemove = {this.props.onRemove} onAmountChange = {this.props.onAmountChange} onNameChange = {this.props.onNameChange}/>
          })
        }
      </div>
    );
  }
}

export default AccountsList;
