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
          <label for = {this.props.stock.name}> {this.props.stock.name} </label>
          <input name = {this.props.stock.name} id={this.props.stock.name} type={Number} value = {this.props.stock.allocation} className="allocation"></input>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Stock;

