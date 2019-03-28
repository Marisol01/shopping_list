import React from 'react';
import List from './List';



// if theres more than 1 wrap in parenthesis and brackets else just parenthesis
const Item = ({ id, complete, itemClick, product, price }) => (
  <div>
    <li
    style={ complete ? { ...styles.item, ...styles.complete } : styles.item } onClick={() => itemClick(id)}>
    {product} {price}
    </li>
  </div>
)


const styles = {
  item: { cursor: 'pointer' },
  complete: { color: 'brown', textDecoration: 'line-through' },
}

export default Item;