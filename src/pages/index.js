import React from "react";
import SEO from "../seo";
import UserProfile from "../components/UserProfile";
export default function Home() {
  return (
    <>
      <SEO title="Twój profil" />
      <UserProfile />
    </>
  );
}
