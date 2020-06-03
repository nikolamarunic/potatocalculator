import React from 'react';
import './Invest.css';

class Invest extends React.Component {
  constructor(props) {
    super(props);

    this.handleAmountChange.bind(this);
  }

  handleAmountChange(event) {
    return event.target.value;
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
