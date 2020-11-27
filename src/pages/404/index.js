import React from "react";
import SEO from "../../seo";
import Layout from "../../layout";
import Link from "next/link";
export default function Home() {
  return (
    <Layout>
      <SEO title="404 Not Found" />
      Nie znaleziono strony!
      <Link href="/">Powróć na stronę główną</Link>
    </Layout>
  );
}
