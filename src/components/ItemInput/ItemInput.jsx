import React from 'react'
import styles from "./ItemInput.module.scss"

const ItemInput = (props) => {

  const { clicked, value, changed } = props;


  return (

    <div className={styles.itemInput}>
      <input type="text" value={value} onChange={changed} />
      <button onClick={clicked}>Add Item</button>
    </div>

  

  )
}

export default ItemInput
