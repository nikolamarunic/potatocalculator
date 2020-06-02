import React from 'react';
import './HoldingsList.css';
import Stock from '../Stock/Stock';


class HoldingsList extends React.Component {
  constructor(props) {
    super(props);
    this.addStock = this.addStock.bind(this);
    this.state = {
      stockId: 4 //By default 3 accounts available
    }
    
  }

  addStock() {
    let newId = this.state.stockId + 1
    this.setState( {stockId: newId});
    
    let tempStock = {name: "New Stock", allocation: 0, id: newId};
    this.props.onAdd(tempStock);
  }

  render() {
    return (
      <div className="HoldingsList">
        {
          this.props.stocks.map((stock, i) => {
            return <Stock stock = {stock}
            key = {`stock${i+1}`} onRemove = {this.props.onRemove} onAdd = {this.props.onAdd}
            handleNameChange = {this.props.handleNameChange} handleAllocChange = {this.props.handleAllocChange} />
          })
        }
        <button className="HoldingsButton" onClick = {this.addStock}>+</button>
      </div>
    );
  }
}

export default HoldingsList;
