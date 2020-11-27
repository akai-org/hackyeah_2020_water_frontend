import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import "../styles/global.scss";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [cookies] = useCookies();
  useEffect(() => {
    if (router.pathname == "/") {
      if (cookies.accessToken) {
        router.push("/profile");
      }
    } else if (!cookies.accessToken) {
      router.push("/");
    }
  });
  return <Component {...pageProps} />;
}

export default MyApp;
