import React from 'react';
import './AccountEntry.css';

class AccountEntry extends React.Component {
  constructor(props){
    super(props);

  }

  removeAccount() {
    //TODO
    return;
  }

  render() {
    return (
      <div className="AccountEntry">
        <div className="Account-information">
          <h4  type= 'text' className="stockName">{this.props.name}</h4>
          <input key={this.props.key} type='number' value = {this.props.value} className="value" onChange = {this.handleAllocChange}></input>
        </div>
      </div>
    );
  }
}

export default AccountEntry;

