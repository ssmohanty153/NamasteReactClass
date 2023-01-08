/***
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 *
 *
 * Transitive Dependencies
 */
import React from "react";
import ReactDOM from "react-dom/client";
//its recomended to use react-dom/client

const h1 = React.createElement(
  "h1",
  {
    id: "title1",
    key: "h1",
  },
  "Heading 1 for parcel"
);
const h2 = React.createElement(
  "h1",
  {
    id: "title2",
    key: "h2",
  },
  "Heading 1 for parcel"
);
//inside div adding h2 and h2 tag
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [h1, h2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
root.render(container);
