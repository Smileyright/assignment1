import React, { useState, useContext } from 'react'
import { ItemContext } from './page';

export default function Component3() {
//Input value handling
const [inputValue, setInputValue] = useState('');
//Takes values in list, and ability to edit them
const { items, setItems } = useContext(ItemContext)

    //logic for submit button
    const handleSubmit = () => {
        addItem(inputValue);
        clearInput();
    }

    //handles adding item to list
    const addItem = (input) => {
        const newItem = { id: items.length + 1, name: `${input}` };
        setItems([...items, newItem]);
    }

    //pretty clear
    const clearInput =() => {
        setInputValue("");
    }

    //updates input value when changed
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h2>This component can update that list</h2>

            <input value={inputValue} onChange={handleInputChange}/>
            <button onClick={() => handleSubmit()}>Add Item</button>
        </div>
    );
}