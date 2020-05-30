import React from 'react';
import './AccountEntry.css';

class AccountEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      value: this.props.value
    }
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  handleAmountChange(newAmount) {
    let newVal =  Number(newAmount.target.value);
    let change = {holdingName: this.props.name, newAmnt : newVal};
    this.setState({name: this.props.name, value: newVal});

    this.props.handleAmountChange(change)
  }

  render() {
    return (
      <div className="AccountEntry">
        <div className="Account-information">
          <h4  type= 'text' className="stockName">{this.props.name}</h4>
          <input id={this.props.key} type='number' value = {this.props.value} className="value" onChange = {this.handleAmountChange}></input>
        </div>
      </div>
    );
  }
}

export default AccountEntry;

