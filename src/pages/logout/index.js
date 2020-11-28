import React, { useEffect } from "react";
import SEO from "../../seo";
import { useAuth } from "../../context/AuthProvider";
import { useRouter } from "next/router";
export default function Home() {
  const { logout } = useAuth();
  const router = useRouter();
  useEffect(() => {
    logout();
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  }, []);
  return (
    <>
      <SEO title="Wylogowywanie" />
      <div style={{ textAlign: "center" }}>
        Wylogowano!
        <br />
        Za chwile przekieruje cię na stronę logowania
      </div>
    </>
  );
}
