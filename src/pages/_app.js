import React from "react";
import "../styles/global.scss";
import { AuthProvider } from "../context/AuthProvider";
import { ProtectRoute } from "../context/ProtectRoute";
import Layout from '../layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AuthProvider>
        <ProtectRoute>
          <Component {...pageProps} />
        </ProtectRoute>
      </AuthProvider>
    </Layout>
  );
}

export default MyApp;
