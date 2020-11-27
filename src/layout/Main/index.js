import React from "react";
import X from "./index.module.scss";
const Main = ({ children }) => {
  return (
    <main className={X["main"]}>
      {children}
    </main>
  );
};
export default Main;
