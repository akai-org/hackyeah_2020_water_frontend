import React from "react";
import SEO from "../../seo";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <SEO title="Profile" />
      your profile
      <Link href="/logout">Wyloguj się</Link>
    </>
  );
}
