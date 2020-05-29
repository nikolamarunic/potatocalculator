import React from 'react';
import './App.css';
import Holdings from '../Holdings/Holdings';
import Accounts from '../Accounts/Accounts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holdings: [ {name: 'CDN-B', allocation: 20, id: 1}, {name: 'CDN', allocation: 27, id: 2}, 
      {name: 'USA', allocation: 27, id: 3}, {name: 'INTL', allocation: 27, id: 4}],

      accounts: [ {name: 'CAD CASH', values : {'CDN-B': 100, 'CDN' : 200, 'USA': 300, 'INTL': 400}},
      {name: 'CAD TFSA', values :{'CDN-B': 500, 'CDN' : 600, 'USA': 700, 'INTL': 800}}]
    };
    this.removeStock = this.removeStock.bind(this);
    this.addStock = this.addStock.bind(this);
    this.handleAllocChange = this.handleAllocChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  //Removes a stock from the user's portfolio. Will affect both the stock component and accounts component.
  removeStock(stock) {
    let stocks = this.state.holdings;
    stocks = stocks.filter(currStock => currStock.name !== stock.name);
    this.setState({holdings: stocks});
  }

  //Adds a stock to a user's portfolio. Will affect both the stock component and accounts component.
  addStock(stock) {
    let stocks = this.state.holdings;
    //Don't want to add duplicate stocks
    if (stocks.find(savedStock => savedStock.name === stock.name)) {
      return; //Breaks out of the method if already found
    }
    //Else want to add it
    stocks.push(stock);
    this.setState({holdings: stocks});

  }

  // Handles the allocation change of a stock from the stock container.
  handleAllocChange(newStock) {
    let stocks = this.state.holdings;
    let currStock = stocks.find(savedStock => savedStock.name === newStock.name);
    currStock.allocation = newStock.newAlloc;
    this.setState({holdings: stocks});
  }

  // Handles the name change of a stock from the stock container.
  handleNameChange(newStock) {
    let stocks = this.state.holdings;
    let currStock = stocks.find(savedStock => savedStock.name === newStock.name);
    currStock.name = newStock.newName;
    this.setState({holdings: stocks});
  }

  render() {
    return (
      <div>
        <h1>PotatoCalculator</h1>
        {/* <Holdings holdings = {this.state.holdings} onRemove = {this.removeStock} onAdd = {this.addStock} 
        handleNameChange = {this.handleNameChange} handleAllocChange = {this.handleAllocChange}/> */}
        
        <Accounts holdings = {this.state.holdings} accounts = {this.state.accounts}/>
      </div>
    );
  }
}

export default App;
