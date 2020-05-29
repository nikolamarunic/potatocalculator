import React from 'react';
import './Account.css';

class Account extends React.Component {

  constructor(props){
    super(props);

  }

  removeAccount() {
    //TODO
    return;
  }

  renderAction() {
    return <button className = "Account-action" onClick = {this.removeAccount}>-</button>
  }

  render() {
    return (
      <div className="Account">
        <div className="Account-information">
          {/* <label key={this.props.stock.key}  type= 'text' value = {this.props.stock.name} className="stockName" onChange = {this.handleNameChange}></label> */}
          <label  type= 'text' value = {this.props.stock} className="stockName"></label>
        </div>
        <div className="Account-information">
          {/* <input key={this.props.stock.key} type='number' value = {this.props.stock.allocation} className="value" onChange = {this.handleAllocChange}></input> */}
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Account;

