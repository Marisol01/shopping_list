import React, { Component } from 'react';
// import './App.css';
import Item from './items/Item';
import ShoppingForm from './items/ShoppingForm';
import Footer from './items/Footer';
import List from './items/List';


class App extends Component {
  state =  {
    items: [
      { id: 1, product: "Bananas", price: "$1.25", complete: true },
      { id: 2, product: "Oranges", price: "$1.00", complete: false },
      { id: 3, product: "Avocados", price: "$2.00", complete: false },
      { id: 4, product: "Pasta", price: "$4.50", complete: true },
      { id: 5, product: "Rib-eye", price: "$7.50", complete: false }
    ],
    filter: 'All'

  };

  setFilter = (filter) => {
    this.setState({ filter })
  }

  getUniqId = () => {
    return Math.floor((1+ Math.random()) * 0x10000).toString(16).substring(1)
  }

  addItem = (product) => {
    const { items } = this.state;
    const item = { product, id: this.getUniqId(), complete: false }
    this.setState({ items: [item, ...items] })
  }

  renderItems = () => {
    const { items } = this.state;
    return items.map( item => {
      return (
        <li key={item.id}>{item.product}{item.price}</li>
      )
    })
  };

 

 

  handleClick = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.map( item => {
        if ( item.id === id ) {
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item
      })
    })
  }

  visibleItems = () => {
    const { items, filter } = this.state;
    switch(filter) {
      case 'Active':
        return items.filter( t => !t.complete )
      case 'Complete':
        return items.filter( t => t.complete )
      default:
        return items;
    }
  }
    

  render() {
    const { items, filter } = this.state;
    return (
      <div>
        <ul>
          <h1 className="text-center">Grocery Shopping List</h1>
          <h2 class="flashit">Let's Make Your List!</h2>
          <ShoppingForm addItem={this.addItem} />
          <Footer filter={filter} setFilter={this.setFilter} />
          <List name="Shopping List" items={items} items={this.visibleItems()} itemClick={this.handleClick} />
          { this.renderItems() }
        </ul>
      </div>

    );
  }
}
      
     

     
  
    
   

export default App;
