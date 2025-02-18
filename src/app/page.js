"use client"

import React, { useState, createContext } from "react";
import Component1 from "./component1";
import Component2 from "./component2";
import Component3 from "./component3";

export const ItemContext = createContext();

  const ItemContextProvider = ({ children }) => {
    const [newItem, setNewItem] = useState(undefined);

    return (
        <ItemContext.Provider value={{ newItem, setNewItem }}>
            {children}
        </ItemContext.Provider>
    );
  };

  const Home = () => {
    const [cSelect, setComponent] = useState(0);
  
    const components = {
      0: <Component1 />,
      1: <Component2 />,
      2: <Component3 />,
    };
  
    return (
      // Wrap Home in ItemContextProvider
      <ItemContextProvider>
        <div>
          <h1>Welcome!</h1>
          <button onClick={() => setComponent(0)}>Component 1</button>
          <button onClick={() => setComponent(1)}>Component 2</button>
          <button onClick={() => setComponent(2)}>Component 3</button>
  
          <div>{components[cSelect]}</div>
        </div>
      </ItemContextProvider>
    );
  };
export default Home;