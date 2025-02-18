"use client"

import React, { useState, useEffect, useContext } from "react";
import { ItemContext } from "./page";

export default function Component2() {
  //Takes values in list, and ability to edit them
  const { items, setItems } = useContext(ItemContext);
  //Choosing whether to show items or itemsA
  const [isShown, toggleShow] = useState(true);
  //Same list, but only the items that start with a
  const [itemsA, setItemsA] = useState([{ id: 1, name: "A" }]);

  //Makes sure itemsA is up to date
  useEffect(() => {
    updateItemsA();
  }, [items]);

  //Logic to remove items
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  //Actual function to update itemsA
  const updateItemsA = () => {
    setItemsA(
      items.filter((item) => item.name.charAt(0).toLowerCase() === "a")
    );
  };

  //Toggles which list is shown
  const renderList = (event) => {
    updateItemsA();
    toggleShow(!event.target.checked);
  };

  return (
    <div className="list-container">
      <h2>This component displays a list</h2>

      <ul>
        {(isShown ? items : itemsA).map((item) => (
          <li key={item.id}>
            {item.name}
            <button className="remove-btn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="checkbox-container">
        <label>
          <input type="checkbox" onChange={renderList} /> Show only "A" items
        </label>
      </div>
    </div>
  );
}