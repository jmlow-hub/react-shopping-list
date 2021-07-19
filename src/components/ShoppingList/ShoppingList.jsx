import React from 'react'
import ItemInput from '../ItemInput'
import styles from "./ShoppingList.module.scss"

const ShoppingList = (props) => {

  const { listItem, changed, clicked, value, cleared } = props;

  return (
    <div className={styles.shoppingList}>   

      <ItemInput 
        clicked = {clicked}
        value = {value}
        changed = {changed}
      
            />

      <ol>
        {listItem}
       
      </ol>

      <button onClick={cleared}>Clear List</button>
      
    </div>
  )
}

export default ShoppingList
