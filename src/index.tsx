import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TweetProvider from "./store/TweetProvider";

ReactDOM.render(
  <React.StrictMode>
    <TweetProvider>
      <App />
    </TweetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
