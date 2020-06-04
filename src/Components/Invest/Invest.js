import React from 'react';
import './Invest.css';

class Invest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: null
    }

    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.invest = this.invest.bind(this);
  }

  handleAmountChange(event) {
    let newAmnt = Number(event.target.value);
    this.setState({amount: newAmnt});
  }

  invest() {
    this.props.onInvest(this.state.amount);
  }

  renderAction() {
    return <button className="Invest-action" onClick={this.invest}>Invest! $</button>
  }

  render() {
    return (
      <div className="Invest">
        <div className="investContent">
          {this.renderAction()}
          <input key={this.key} type='number' className="investInput" onChange = {this.handleAmountChange}></input>
         </div>
      </div>
    );
  }
}

export default Invest;
