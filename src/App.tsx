import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import SideBar from "./components/layout/SideBar/SideBar";
import Widget from "./components/layout/Widget/Widget";
import TweetsPage from "./pages/TweetsPage";
import UnimplementedPage from "./pages/UnimplementedPage";

function App() {
  return (
    <div className="container">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<TweetsPage />} />
          <Route path="/not-supported-yet" element={<UnimplementedPage />} />
          <Route
            path="*"
            element={<Navigate to="/not-supported-yet" replace />}
          />
        </Routes>
        <Widget />
      </Router>
    </div>
  );
}

export default App;
