import React from "react";
import { render } from "react-dom";

import Pet from "./Pet";

const App = () => (
  <div>
    <h1>Adopt Me</h1>
    <Pet name="Gandalf" animal="cat" breed="Mixed" />
    <Pet name="Alfi" animal="dog" breed="Weimaraner" />
    <Pet name="Peny" animal="dog" breed="Pug" />
  </div>
);

render(React.createElement(App), document.getElementById("root"));
