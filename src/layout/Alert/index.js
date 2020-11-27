import React, { useState, useEffect } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
export default function index() {
  const [value, setValue] = useState({});
  const remove = () => setValue((e) => ({ text: "", type: e.type }));
  useEffect(() => {
    window.setAlert = (a = "info", b = "some text") => {
      setValue({ type: a, text: b });
    };
  }, []);
  return (
    <Snackbar open={!!value?.text} autoHideDuration={6000}>
      <Alert
        onClose={remove}
        severity={value.type}
        variant="filled"
        elevation={6}
      >
        {value.text}
      </Alert>
    </Snackbar>
  );
}
