import React from 'react';
import './AccountEntry.css';

class AccountEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      value: this.props.value,
      isChange: this.props.isChange
    }
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  //Handles the user changing their amlunt invested.
  //Idea: create an object containing all required information
  handleAmountChange(newAmount) {
    if (!this.state.isChange) {
      let newVal = Number(newAmount.target.value);
      let change = { holdingName: this.props.name, newAmnt: newVal };
      this.setState({ name: this.props.name, value: newVal });
      this.props.handleAmountChange(change)
    }
  }

  render() {
    var textColour = '#6d757d'; //grey
    if (this.props.isChange) {
      if (this.props.value > 0) {
        textColour = '#1ec08f'; //green
      } if (this.props.value < 0) {
        textColour = '#e76882'; //red
      }
    }

    return (
      <div className="AccountEntry">
        <div className="Account-information">
          <h4 type='text' className="name">{this.props.name}</h4>
          <input key={this.key} type='number' value={this.props.value} className="value" onChange={this.handleAmountChange}
            style={{ color: textColour }}></input>
        </div>
      </div>
    );
  }
}

export default AccountEntry;

