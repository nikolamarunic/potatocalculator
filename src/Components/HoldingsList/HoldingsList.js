import React from 'react';
import './HoldingsList.css';
import Stock from '../Stock/Stock';


class HoldingsList extends React.Component {

  render() {
    return (
      <div className="HoldingsList">
        {
          this.props.stocks.map((stock, i) => {
            return <Stock stock = {stock}
            key = {`ren${i+1}`} onRemove = {this.props.onRemove} onAdd = {this.props.onAdd}
            handleNameChange = {this.props.handleNameChange} handleAllocChange = {this.props.handleAllocChange} />
          })
        }
      </div>
    );
  }
}

export default HoldingsList;
