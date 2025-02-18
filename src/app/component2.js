"use client"

import React, { useState, useEffect, useContext } from "react";
import { ItemContext } from "./page";

export default function Component2() {
  const { items, setItems } = useContext(ItemContext);
  const [isShown, toggleShow] = useState(true);
  const [itemsA, setItemsA] = useState([{ id: 1, name: "A" }]);

  useEffect(() => {
    updateItemsA();
  }, [items]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItemsA = () => {
    setItemsA(
      items.filter((item) => item.name.charAt(0).toLowerCase() === "a")
    );
  };

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