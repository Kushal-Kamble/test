import "./App.css";

import React, { useState } from "react";

function App() {

  const [num, setNum] = useState(0); // array desturing

  function inc() {
    setNum(num + 1);
  }

  function dec() {
    setNum(num - 1);
  }




  return (
    <div className="container kushal">
      <div className="row ">
        <div className="two">
          <h1>use state</h1>
        </div>

        <div className="three">
          
          <button type="button" class="btn btn-primary" onClick={inc}>
            Increment
          </button>
          <h1 className="four">{num}</h1>
          <button type="button" class="btn btn-danger" onClick={dec}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
