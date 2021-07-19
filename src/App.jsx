
import './App.css';
import ShoppingList from './components/ShoppingList';
import { useState } from 'react';
import styles from "./App.module.scss"

const App = () => {


//set state for the input field
const [newItem, setNewItem] = useState("");
//set state for the shopping list - needs to have state as it will update
const [shoppingList, setShoppinglist] = useState([]);
//function to capture input value - ie. change of state
const itemHandler = (e) => {
  const addedItem = e.target.value;
   setNewItem(addedItem);
  ;
}

//function to handle the item input on button click
const listHandler = (e) => {
  const updatedList = shoppingList.concat(newItem)//.push will not work in react. .concat will return a new list
  setShoppinglist(updatedList);
  setNewItem("")//clears the input field by re-setting the value to empty
}
 
//function to strike out list itmes - to delete items, .filter could be used along with text content
  const strikeOutHandler = (e) => {
     e.target.style.textDecoration = "line-through";
   }

//map the shopping list to individual list items
const list = shoppingList.map((item) => {
  return <li onClick={strikeOutHandler}>{item}</li>
})

//function to clear list
const clearListHandler = (e) => {
  setShoppinglist([]);
}

  return (


    <div className={styles.app}>

      <h3>My Shopping list</h3>

      <ShoppingList 
      // pass shopping list items and itemhandler function down as props
        listItem={list}
        changed={itemHandler}
        value={newItem}
        clicked={listHandler}
        cleared={clearListHandler}
        />
      
    </div>
  );
}

export default App
