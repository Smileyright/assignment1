"use client"

import React, { useState } from "react";
import Component1 from "./component1";
import Component2 from "./component2";
import Component3 from "./component3";

export default function Home() {

  const [cSelect, setComponent] = useState(0);

  const renderContent =() => {
    if (cSelect == 0) {
      return <Component1 />;
    }
    if (cSelect == 1) {
      return <Component2 />;
    }
    if (cSelect == 2) {
      return <Component3 />;
    }
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={() => setComponent(0)}>Component 1</button>
      <button onClick={() => setComponent(1)}>Component 2</button>
      <button onClick={() => setComponent(2)}>Component 3</button>

      <div>
        {renderContent()}
      </div>
    </div>
  );
}