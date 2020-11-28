import React from "react";
import "../styles/global.scss";
import { AuthProvider } from "../context/AuthProvider";
// import { CookiesProvider } from "react-cookie";
import Layout from "../layout";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        {/* <CookiesProvider> */}
        <Component {...pageProps} />
        {/* </CookiesProvider> */}
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
