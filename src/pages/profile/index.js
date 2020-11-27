import React from "react";
import SEO from "../../seo";
import Layout from "../../layout";
import Link from "next/link";
export default function Home() {
  return (
    <Layout>
      <SEO title="Profile" />
      your profile
      <Link href="/logout">Wyloguj się</Link>
    </Layout>
  );
}
