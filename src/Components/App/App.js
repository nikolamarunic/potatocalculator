import React from 'react';
import './App.css';
import Holdings from '../Holdings/Holdings';
import Accounts from '../Accounts/Accounts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holdings: [ {name: 'CDN-B', allocation: 20, id: 1}, {name: 'CDN', allocation: 27, id: 2}, 
      {name: 'USA', allocation: 27, id: 3}, {name: 'INTL', allocation: 27, id: 4}]
    };
    this.removeStock = this.removeStock.bind(this);
    this.addStock = this.addStock.bind(this);
    this.handleAllocChange = this.handleAllocChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  removeStock(stock) {
    let stocks = this.state.holdings;
    stocks = stocks.filter(currStock => currStock.name !== stock.name);
    this.setState({holdings: stocks});
  }

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

  handleAllocChange(newStock) {
    let stocks = this.state.holdings;
    let currStock = stocks.find(savedStock => savedStock.name === newStock.name);
    currStock.allocation = newStock.newAlloc;
    this.setState({holdings: stocks});
  }

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
        <Holdings holdings = {this.state.holdings} onRemove = {this.removeStock} onAdd = {this.addStock} 
        handleNameChange = {this.handleNameChange} handleAllocChange = {this.handleAllocChange}/>
        <Accounts />
      </div>
    );
  }
}

export default App;
