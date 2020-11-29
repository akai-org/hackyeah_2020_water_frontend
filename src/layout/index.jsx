import React, { useState, useEffect } from "react";
import Main from "./Main";
import Alert from "./Alert";
import Loading from "./Loading";
import Menu from "./Menu";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthProvider";
import Login from "../components/LoginBox";
import CircularProgress from "@material-ui/core/CircularProgress";
const Layout = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();
  useEffect(() => {
    window.onoffline = () =>
      window.setAlert("warning", "Stracono połączenie z internetem.");
    window.ononline = () =>
      window.setAlert("info", "Ponownie połączono z internetem.");
  }, []);
  return (
    <>
      <Alert />
      <Loading />
      {isLoggedIn && <Menu />}
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        style={{ overflowX: "hidden" }}
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: { opacity: 1 },
        }}
      >
        <Main>
          {loading ? <CircularProgress /> : isLoggedIn ? children : <Login />}
        </Main>
      </motion.div>
    </>
  );
};
export default Layout;
