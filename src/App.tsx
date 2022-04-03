import React from "react";
import "./App.css";
import SideBar from "./components/layout/SideBar/SideBar";
import Widget from "./components/layout/Widget/Widget";
import TweetsPage from "./pages/TweetsPage";

function App() {
  return (
    <div className="container">
      <SideBar />
      <TweetsPage />
      <Widget />
    </div>
  );
}

export default App;
