"use client"

import React, { useState, useEffect, useContext } from 'react'
import { ItemContext } from './page';

export default function Component2() {

    const { items, setItems } = useContext(ItemContext);

    // const [inputValue, setInputValue] = useState('');
    const [isShown, toggleShow] = useState(true);
    const [itemsA, setItemsA] = useState([
      { id: 1, name: 'A'}
    ])

    useEffect(() => {
      updateItemsA();
    }, [items]);

    // const handleSubmit = () => {
    //   addItem(inputValue);
    //   clearInput();
    // }

    // const clearInput =() => {
    //   setInputValue("");
    // }

    // const handleInputChange = (event) => {
    //   setInputValue(event.target.value);
    // };
  
    const removeItem = (id) => {
      setItems(items.filter((item) => item.id !== id));
    };

    const updateItems = () => {

    }

    const updateItemsA = () => {
      setItemsA(items.filter((item) => item.name.charAt(0).toLowerCase() === 'a'));
    }

    const renderList = (event) => {
      updateItemsA();
      toggleShow(!event.target.checked);
    }

    return (
        <div>
            <h2>This component displays a list</h2>
            <div>
            {isShown ? (
              <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.name} 
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </li>

              ))}
            </ul>
            ) : (
            <ul>
              {itemsA.map((item) => (
                <li key={item.id}>
                  {item.name} 
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            )}
            
          </div>

        <input type="checkbox" onChange={renderList}></input>

        </div>
    );
}