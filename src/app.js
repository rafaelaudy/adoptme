import React from "react";
import ReactDOM from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
