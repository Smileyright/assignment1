import React, { useState, useContext } from 'react'
import { ItemContext } from './page';

export default function Component3() {

const [inputValue, setInputValue] = useState('');
const { items, setItems } = useContext(ItemContext)

    const handleSubmit = () => {
        addItem(inputValue);
        clearInput();
    }

    const addItem = (input) => {
        const newItem = { id: items.length + 1, name: `${input}` };
        setItems([...items, newItem]);
      };

    const clearInput =() => {
        setInputValue("");
    }

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