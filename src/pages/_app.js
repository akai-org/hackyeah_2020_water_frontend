import React from "react";
import "../styles/global.scss";
import { AuthProvider } from "../context/AuthProvider";
import { ProtectRoute } from "../context/ProtectRoute";
// import { CookiesProvider } from "react-cookie";
import Layout from "../layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <CookiesProvider> */}
        <AuthProvider>
          <ProtectRoute>
            <Component {...pageProps} />
          </ProtectRoute>
        </AuthProvider>
      {/* </CookiesProvider> */}
    </Layout>
  );
}

export default MyApp;
