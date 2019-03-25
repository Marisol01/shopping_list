import React from 'react';


const Item = ({ id, product, complete, itemClick }) => (
  <li
    style={ complete ? { ...styles.item, ...styles.complete } : styles.item } onClick={ () => itemClick(id) } >{product}
  </li>
);

const styles = {
  item: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
}

export default Item;