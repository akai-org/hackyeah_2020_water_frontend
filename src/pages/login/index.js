import React from "react";
import SEO from "../../seo";
import LoginBox from "../../components/LoginBox";

export default function Home() {
  return (
    <>
      <SEO title="Zaloguj się" />
      <LoginBox />
    </>
  );
}
