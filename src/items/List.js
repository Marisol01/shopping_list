import React from 'react';
import Item from './Item';

const List = ({ items, itemClick }) => (
  <ul> 
    { items.map( item => <Item key={item.id} {...item} itemClick={itemClick} /> )}
  </ul>
);

export default List;

