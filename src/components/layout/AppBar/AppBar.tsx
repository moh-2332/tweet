import React from "react";

import classes from "./AppBar.module.css";

const AppBar: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={classes.appbar}>
      <h2>{title}</h2>
    </div>
  );
};

export default AppBar;
