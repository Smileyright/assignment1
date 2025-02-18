"use client"

import React, { useState, createContext } from "react";
import Component1 from "./component1";
import Component2 from "./component2";
import Component3 from "./component3";

//Allows list to be edited or accessed from components
export const ItemContext = createContext();

  const ItemContextProvider = ({ children }) => {
    const [items, setItems] = useState([
          { id: 1, name: 'Apples' },
          { id: 2, name: 'Bananas' },
          { id: 3, name: 'Oranges' },
        ]);

    return (
        <ItemContext.Provider value={{ items, setItems }}>
            {children}
        </ItemContext.Provider>
    );
  };

  const Home = () => {
    //Logic for which component should be displayed
    const [cSelect, setComponent] = useState(0);
  
    const components = {
      0: <Component1 name="Joe"/>,
      1: <Component2 />,
      2: <Component3 />,
    };
  //Display
    return (
      <ItemContextProvider>
        <div id="center">
          <div id="title">
          <h1>This is my submission for Assignment 1</h1>
          <p>- Alex</p>
          </div>
          <div>
            <button className="buttons" onClick={() => setComponent(0)}>Home</button>
            <button className="buttons" onClick={() => setComponent(1)}>List</button>
            <button className="buttons" onClick={() => setComponent(2)}>Edit List</button>
          </div>

          <div id="main">{components[cSelect]}</div>
        </div>
      </ItemContextProvider>
    );
  };
export default Home;