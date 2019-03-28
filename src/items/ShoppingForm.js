import React, { Component } from 'react';

class ShoppingForm extends Component {
  state = { product: " ", price: " " }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.product);
    this.setState({ product: '' })
  }

  handleChange = (e) => {
    this.setState({ product: e.target.value })
  }

 

  render() {
    const { item } = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          value={item} 
          item="item" 
          onChange={this.handleChange} 
          required placeholder="List item and price" />
      </form>
    )
  }
}


export default ShoppingForm