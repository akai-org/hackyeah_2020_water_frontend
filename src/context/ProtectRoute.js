import React, { useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { useRouter } from "next/router";
import Login from "../pages/login";
export const ProtectRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  console.log("login in:",isLoggedIn, router.pathname);
  useEffect(() => {
    if (router.pathname == "/404") {
      router.push("/login");
    }
  });
  if (!isLoggedIn && router.pathname !== "/login") {
    return <Login />;
  }
  return children;
};
