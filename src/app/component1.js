import React, { useState, useContext } from 'react'
import { ItemContext } from './page';

export default function Component1() {

const [inputValue, setInputValue] = useState('');
const { setNewItem } = useContext(ItemContext)

    const handleSubmit = () => {
        setNewItem(inputValue);
        clearInput();
    }

    const clearInput =() => {
        setInputValue("");
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <p>This is the form component</p>

            <input value={inputValue} onChange={handleInputChange}/>
            <button onClick={() => handleSubmit()}>Add Item</button>
        </div>
    );
}