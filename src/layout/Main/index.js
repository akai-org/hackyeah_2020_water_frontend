import React from "react";
import Top from "./Top";
import Bottom from "./Bottom";
import classes from "./index.module.scss";
const Main = ({ children }) => {
  return (
    <>
      <Top />
      <main className={classes["main"]}>{children}</main>
      <Bottom />
    </>
  );
};
export default Main;
