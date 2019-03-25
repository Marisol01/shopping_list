import React from 'react';
import List from './List';



// if theres more than 1 wrap in parenthesis and brackets else just paremnthesis
const Item = ({ items, product, itemClick }) => (
  <div>
    <h2>{product}</h2>
    <ul> 
      { items.map( item => <Item key={item.id} { ...item} itemClick={itemClick} /> )}
    </ul>
  </div>
)

export default Item;