import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import TweetProvider from "./store/TweetProvider";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <TweetProvider>
      <App />
    </TweetProvider>
  </React.StrictMode>
);
