"use client"

import React, { useState, useEffect } from 'react'
import { ItemContext } from './page';

export default function Component2() {

    // const [inputValue, setInputValue] = useState('');
    const [isShown, toggleShow] = useState(true);
    const [items, setItems] = useState([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ]);
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
  
    const addItem = (input) => {
      const newItem = { id: items.length + 1, name: `${input}` };
      setItems([...items, newItem]);
    };
  
    const removeItem = (id) => {
      setItems(items.filter((item) => item.id !== id));
    };

    const updateItemsA = () => {
      setItemsA(items.filter((item) => item.name.charAt(0).toLowerCase() === 'a'));
    }

    const renderList = (event) => {
      updateItemsA();
      toggleShow(!event.target.checked);
    }

    return (
        <div>
            <p>This is the list component</p>
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

        <input value={inputValue} onChange={handleInputChange}/>
        <button onClick={() => handleSubmit()}>Add Item</button>
        <input type="checkbox" onChange={renderList}></input>

        </div>
    );
}