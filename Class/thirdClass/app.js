import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", { id: "hello" }, "this is first h1");
const h2 = React.createElement("h2", { id: "hello2" }, "This is first h2");
const h3 = React.createElement("h3", { id: "hello3" }, "This is first h3");
const h4 = React.createElement("h4", { id: "hello4" }, "This is first h4");

const div = React.createElement("div", { id: "dic-container" }, [
  h1,
  h2,
  h3,
  h4,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);
