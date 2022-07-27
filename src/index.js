import React from "react";
import ReactDOM from "react-dom";

// react code
const name = "Haben";
const number = 9;

ReactDOM.render(
  <div>
    <h1>React app from scrash</h1>
    <ul>
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </ul>
    <h2>my name is {name}.</h2>
    <p>my lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);

// vanila js code for the same shit.
var h1 = document.createElement("h1");
h1.innerHTML = "Hello world";
document.getElementById("root").appendChild(h1);
