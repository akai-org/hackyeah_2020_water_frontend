import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useRouter } from "next/router";
export default function Home() {
  const { logout } = useAuth();
  const router = useRouter();
  useEffect(() => {
    logout();
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, []);
  return (
    <div>
      Wylogowano!
      <br />
      Za chwile przekieruje cię na stronę logowania
    </div>
  );
}
