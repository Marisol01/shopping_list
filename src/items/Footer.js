import React from 'react';

const styles = {
  link: {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'green',
    marginLeft: '5px',
    marginRight: '5px',
  }
}

const filterLink = (current, product, setFilter) => {
  if (current === product)
    return <span>{product}</span>
  else
    return <span style={styles.link} onClick={() => setFilter(product) }>{product}</span>
}

const Footer = ({ filter, setFilter }) => (
  <div>
    {['All', 'Active Items', 'Completed Items'].map( f => filterLink(filter, f, setFilter) ) }
  </div>
)

export default Footer;