import React from 'react';
import './Holdings.css';
import HoldingsList from '../HoldingsList/HoldingsList';

class Holdings extends React.Component {
  constructor(props) {
    super(props);
    this.addStock = this.addStock.bind(this);
  }

  addStock() {
    let tempStock = {name: "New Stock", allocation: 0};
    this.props.onAdd(tempStock);
  }

  render() {
    return (
      <div className="Holdings">
        <h4 className= "holdingsTitle">Your Holdings</h4>
        <HoldingsList stocks = {this.props.holdings} onRemove = {this.props.onRemove} onAdd = {this.props.onAdd}
        handleNameChange = {this.props.handleNameChange} handleAllocChange = {this.props.handleAllocChange}/>
        <button className="HoldingsButton" onClick = {this.addStock}>+</button>
      </div>
    );
  }
}

export default Holdings;
