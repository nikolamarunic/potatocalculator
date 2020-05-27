import React from 'react';
import './HoldingsList.css';
import Stock from '../Stock/Stock';


class HoldingsList extends React.Component {

  render() {
    return (
      <div className="HoldingsList">
        {
          this.props.stocks.map(stock => {
            return <Stock stock = {stock}
            key = {stock.name} onRemove = {this.props.onRemove}/>
          })
        }
      </div>
    );
  }
}

export default HoldingsList;
