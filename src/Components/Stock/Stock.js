import React from 'react';
import './Stock.css';

class Stock extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      name: this.props.stock.name,
      alloc: this.props.stock.allocation
    };


    this.removeStock = this.removeStock.bind(this);
    this.addStock = this.addStock.bind(this);

    this.handleAllocChange = this.handleAllocChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }


  removeStock() {
    this.props.onRemove(this.props.stock);
  }

  addStock() {
    this.props.onAdd(this.props.stock);
  }

  renderAction() {
    return <button className = "Stock-action" onClick = {this.removeStock}>-</button>
  }

  handleNameChange(event) {
    let newStock = {name: this.props.stock.name, allocation: this.props.stock.allocation, newName: event.target.value};
    this.setState({name: newStock.newName, alloc: this.props.stock.allocation});
    this.props.handleNameChange(newStock);
  }

  handleAllocChange(event){
    let newStock = {name: this.props.stock.name, allocation: this.props.stock.allocation, newAlloc: Number(event.target.value)};
    this.setState({alloc: newStock.newAlloc, name: this.props.stock.name});
    this.props.handleAllocChange(newStock);
  }

  render() {
    return (
      <div className="Stock">
        <div className="Stock-information">
          <input key={this.props.stock.key}  type= 'text' value = {this.props.stock.name} className="stockName" onChange = {this.handleNameChange}></input>
          <input key={this.props.stock.key} type='number' value = {this.props.stock.allocation} className="allocation" onChange = {this.handleAllocChange}></input>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Stock;

