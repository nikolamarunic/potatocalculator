import React from 'react';
import './Stock.css';

class Stock extends React.Component {

  constructor(props){
    super(props);
    this.removeStock = this.removeStock.bind(this);
  }


  removeStock() {
    this.props.onRemove(this.props.stock);
  }

  renderAction() {
    return <button className = "Stock-action" onClick = {this.removeStock}>-</button>
  }

  render() {
    return (
      <div className="Stock">
        <div className="Stock-information">
          <h3>{this.props.stock.name}</h3>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Stock;

