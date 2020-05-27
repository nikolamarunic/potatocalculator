import React from 'react';
import './Holdings.css';
import HoldingsList from '../HoldingsList/HoldingsList';

class Holdings extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack() {
    let tempTrack = {name:'Jeff', allocation: 20};
    this.props.onAdd(tempTrack);
  }
  render() {
    return (
      <div className="Holdings">
        <h2>Your Holdings</h2>
        <HoldingsList stocks = {this.props.holdings} onRemove = {this.props.onRemove}/>
        <button class="HoldingsButton" onClick = {this.addTrack}>+</button>
      </div>
    );
  }
}

export default Holdings;
