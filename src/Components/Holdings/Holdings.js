import React from 'react';
import './Holdings.css';
import HoldingsList from '../HoldingsList/HoldingsList';

class Holdings extends React.Component {
  render() {
    return (
      <div className="Holdings">
        <h2>Your Holdings</h2>
        <HoldingsList stocks = {this.props.holdings} onRemove = {this.props.onRemove}/>
        <button class="HoldingsButton">+</button>
      </div>
    );
  }
}

export default Holdings;
