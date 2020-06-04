import React from 'react';
import './App.css';
import Holdings from '../Holdings/Holdings';
import Accounts from '../Accounts/Accounts';
import Invest from '../Invest/Invest';
import Calculator from '../../util/Calculator';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holdings: [{ name: 'CDN-B', allocation: 20, id: 1 }, { name: 'CDN', allocation: 26, id: 2 },
      { name: 'USA', allocation: 27, id: 3 }, { name: 'INTL', allocation: 27, id: 4 }],

      accounts: [{ name: 'CAD CASH', values: { 'CDN-B': 100, 'CDN': 200, 'USA': 300, 'INTL': 400 }, id: 1, limit: -1 },
      { name: 'CAD TFSA', values: { 'CDN-B': 500, 'CDN': 600, 'USA': 700, 'INTL': 800 }, id: 2, limit: 0 },
      { name: 'CAD RRSP', values: { 'CDN-B': 900, 'CDN': 1000, 'USA': 700, 'INTL': 1100 }, id: 3, limit: 0 }
    ]
    };
    this.removeStock = this.removeStock.bind(this);
    this.removeAccount = this.removeAccount.bind(this);

    this.addStock = this.addStock.bind(this);
    this.addAccount = this.addAccount.bind(this);

    this.handleAllocChange = this.handleAllocChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAccountAmountChange = this.handleAccountAmountChange.bind(this);

    this.handleAccountNameChange = this.handleAccountNameChange.bind(this);

    this.handleInvest = this.handleInvest.bind(this);

  }

  //Removes a stock from the user's portfolio. Will affect both the stock component and accounts component.
  removeStock(stock) {
    let stocks = this.state.holdings;
    stocks = stocks.filter(currStock => currStock.id !== stock.id);
    this.setState({ holdings: stocks });
  }

  //Handles when a user removes an account from their portfolio.
  removeAccount(account) {
    let accounts = this.state.accounts;
    accounts = accounts.filter(currAcc => currAcc.id !== account.id);
    this.setState({ accounts: accounts });
  }

  //Handles when a user adds a new account to their portfolio
  addAccount(account) {
    let accounts = this.state.accounts;

    if (accounts.find(savedAcc => savedAcc.id === account.id)) {
      return; //Breaks out of the method if already found
    }
    accounts.push(account);
    this.setState({ accounts: accounts });
  }

  //Handles when a user changes the amount invested in a fund in an account.
  handleAccountAmountChange(amountChange) {
    let accounts = this.state.accounts;
    let targetAccount = accounts.find(savedAcc => savedAcc.name === amountChange.accountName);
    let targetFund = amountChange.holdingName;
    targetAccount.values[targetFund] = amountChange.newAmnt;

    this.setState({ accounts: accounts });
  }

  //Handles the account's name being changed.
  handleAccountNameChange(newAcc) {
    let accounts = this.state.accounts;
    let oldName = newAcc.name;
    let newName = newAcc.newName;

    let currAcc = accounts.find(savedAcc => savedAcc.name === oldName);
    currAcc.name = newName;

    this.setState({accounts: accounts});

  }

  //Adds a stock to a user's portfolio. Will affect both the stock component and accounts component.
  addStock(stock) {
    let stocks = this.state.holdings;
    //Don't want to add duplicate stocks
    if (stocks.find(savedStock => savedStock.id === stock.id)) {
      return; //Breaks out of the method if already found
    }
    //Else want to add it
    stocks.push(stock);

    let accounts = this.state.accounts;
    //Now want to add it to each account, with $0 invested in each account by default.
    accounts.forEach(function (account) {
      account.values[stock.name] = 0;
    });

    this.setState({ holdings: stocks, accounts: accounts });
  }

  // Handles the allocation change of a stock from the stock container.
  handleAllocChange(newStock) {
    let stocks = this.state.holdings;
    let currStock = stocks.find(savedStock => savedStock.id === newStock.id);
    currStock.allocation = newStock.newAlloc;
    this.setState({ holdings: stocks });
  }

  // Handles the name change of a stock from the stock container.
  handleNameChange(newStock) {
    let stocks = this.state.holdings;
    let oldName = newStock.name;
    let newName = newStock.newName;

    let currStock = stocks.find(savedStock => savedStock.name === oldName);
    currStock.name = newName;

    //Also want to update the name in each account
    let accounts = this.state.accounts;
    //Now want to add it to each account, with $0 invested in each account by default.

    accounts.forEach(function (account) {
      account.values[newName] = account.values[oldName];
      delete account.values[oldName];
    });

    this.setState({ holdings: stocks, accounts: accounts });
  }

  handleInvest(amount) {
    console.log(amount);
    if (amount !== null) {  //cant use falsy since that doesnt include zero
      console.log(amount);
      let newInvestment = Calculator.calculateInvestment(this.state.holdings, this.state.accounts, amount);
    }
    
  }

  render() {
    return (
      <div>
        <h1>PotatoCalculator</h1>
        <div className="leftContainer">
          <Holdings holdings={this.state.holdings} onRemove={this.removeStock} onAdd={this.addStock}
            handleNameChange={this.handleNameChange} handleAllocChange={this.handleAllocChange} />
          <Invest onInvest = {this.handleInvest}/>
        </div>

          <div className="accounts" >
            <Accounts holdings={this.state.holdings} accounts={this.state.accounts}
              onRemove={this.removeAccount} onAdd={this.addAccount} 
              onAmountChange={this.handleAccountAmountChange} onNameChange = {this.handleAccountNameChange}/>
          </div>
        
      </div>
    );
  }
}

export default App;
