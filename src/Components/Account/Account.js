import React from 'react';
import './Account.css';

class Account extends React.Component {

  constructor(props){
    super(props);

  }

  renderAction() {
    return <button className = "Account-action" onClick = {this.removeStock}>-</button>
  }

  render() {
    return (
      <div className="Account">
        <div className="Account-information">
          <input key={this.props.stock.key}  type= 'text' value = {this.props.stock.name} className="stockName" onChange = {this.handleNameChange}></input>
          <input key={this.props.stock.key} type='number' value = {this.props.stock.allocation} className="allocation" onChange = {this.handleAllocChange}></input>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Account;

