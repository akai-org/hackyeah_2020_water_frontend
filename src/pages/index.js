import React from "react";
import SEO from "../seo";
import Layout from "../layout";
import LoginBox from "../components/loginBox";
export default function Home() {
  return (
    <Layout>
      <SEO title="Strona głowna" />
      <LoginBox />
    </Layout>
  );
}
