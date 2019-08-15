import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Gandalf",
      animal: "cat",
      breed: "Mixed"
    }),
    React.createElement(Pet, {
      name: "Alfi",
      animal: "dog",
      breed: "Weimaraner"
    }),
    React.createElement(Pet, {
      name: "Peny",
      animal: "dog",
      breed: "Pug"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
