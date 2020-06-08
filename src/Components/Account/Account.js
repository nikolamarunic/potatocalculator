import React from 'react';
import './Account.css';

import AccountEntry from '../AccountEntry/AccountEntry';
import HamburgerMenu from '../../../node_modules/react-hamburger-menu/dist/HamburgerMenu';


class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerOpen: false,
      limit: this.props.account.limit
    };

    this.removeAccount = this.removeAccount.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
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
    let newAcc = { name: this.props.account.name, id: this.props.account.id, values: this.props.account.values, newName: event.target.value };
    this.setState({ name: newAcc.newName });
    this.props.onNameChange(newAcc);
  }

  handleBurgerClick() {
    this.setState({
      burgerOpen: !this.state.burgerOpen
    });
  }

  handleLimitChange(event) {
    let newLimit = Number(event.target.value);
    this.setState({ limit: newLimit });
    let newAcc = { name: this.props.account.name, values: this.props.account.values, id: this.props.account.id, limit: newLimit };
    this.props.onNewLimit(newAcc);
  }



  renderAction() {
    return <button className="Account-action" onClick={this.removeAccount}>-</button>
  }

  render() {
    //if burgerOpen then we are editing the maximum addition to account value/seeing the changes
    if (this.state.burgerOpen) {
      var entries =
          <div className="entries">
            {
              this.props.stocks.map((holding, i) => {
                return <AccountEntry name={holding} key={`ent${i + 1}`} value={this.props.changes.values[holding]}
                  handleAmountChange={this.handleAmountChange} isChange={true} />
              })
            }
          </div>
    } else {
      var entries =
        <div className="entries">
          {
            this.props.stocks.map((holding, i) => {
              return <AccountEntry name={holding} key={`ent${i + 1}`} value={this.props.account.values[holding]}
                handleAmountChange={this.handleAmountChange} isChange={false} />
            })
          }
        </div>

    }
    
    
    return (
      <div className="Account">
        <div className="accountHeader">
          <input className="accountMax" key={`max${this.props.account.id}`} type='number' value={this.props.account.limit} onChange={this.handleLimitChange}></input>
          <input className="accountTitle" key={this.props.account.id} type='text' value={this.props.account.name} onChange={this.handleNameChange}></input>
          <HamburgerMenu
            isOpen={this.state.burgerOpen}
            menuClicked={this.handleBurgerClick.bind(this)} color="#6d757d" className="burgerButton" />
        </div>
        {entries}
        {this.renderAction()}
      </div>
    );
  }
}

export default Account;

