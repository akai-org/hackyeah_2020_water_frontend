import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Alert from "./Alert";
import Loading from "./Loading";
import { motion } from "framer-motion";
const Layout = ({ children }) => {
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
      <Header />
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        style={{ overflowX: "hidden" }}
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: { opacity: 1 },
        }}
      >
        <Main>{children}</Main>
      </motion.div>
      <Footer />
    </>
  );
};
export default Layout;
