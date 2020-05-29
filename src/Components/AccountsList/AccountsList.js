import React from 'react';
import './AccountsList.css';
import Account from '../Account/Account';


class AccountsList extends React.Component {

  render() {
    return (
      <div className="AccountsList">
        {
          // this.props.stocks.map((stock, i) => {
          //   return <Account stock = {stock}
          //   key = {`ren${i+1}`} />
          // })
        }
      </div>
    );
  }
}

export default AccountsList;
