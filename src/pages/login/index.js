import React from "react";
import SEO from "../../seo";
import LoginBox from "../../components/loginBox";

export default function Home() {
  return (
    <>
      <SEO title="Zaloguj się" />
      <LoginBox />
    </>
  );
}
