import React from 'react';
import './Account.css';

import AccountEntry from '../AccountEntry/AccountEntry';
import HamburgerMenu from '../../../node_modules/react-hamburger-menu/dist/HamburgerMenu';


class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerOpen: false
    };

    this.removeAccount = this.removeAccount.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
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



  renderAction() {
    return <button className="Account-action" onClick={this.removeAccount}>-</button>
  }

  render() {
    return (
      <div className="Account">
        {/* <h2>{this.props.account.name}</h2> */}
        <div className="accountHeader">
          <input className="accountTitle" key={this.props.account.id} type='text' value={this.props.account.name} onChange={this.handleNameChange}></input>
          <HamburgerMenu
            isOpen={this.state.burgerOpen}
            menuClicked={this.handleBurgerClick.bind(this)} color="#6d757d" className = "burgerButton"/>
        </div>
        <div className="entries">
          {
            this.props.stocks.map((holding, i) => {
              return <AccountEntry name={holding} key={`ent${i + 1}`} value={this.props.account.values[holding]} handleAmountChange={this.handleAmountChange} />
            })
          }
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Account;

