import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import classes from "./index.module.scss";
const Loading = () => {
  const [value, setValue] = useState(false);
  useEffect(() => {
    window.loading = {
      open: () => setValue(true),
      close: () => setValue(false),
    };
  }, []);

  return (
    <>
      {value && (
        <div className={classes["loading"]}>
          <CircularProgress color="inherit" />
        </div>
      )}
    </>
  );
};
export default Loading;
