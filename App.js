// creted an element using react
import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "parent" }, [
  "I am Parent",
  React.createElement("h3", { id: "child" }, [
    "I am child",
    React.createElement("h5", { id: "Grandchild" }, "I am Grand child"),
  ]),
]);

console.log(heading); //this will return an object

// targeting and creating root using ReactDom.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering root with the created element
root.render(heading);
