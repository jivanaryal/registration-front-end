import React from "react";
import Toolbar from "../Components/Navigation/Toolbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
