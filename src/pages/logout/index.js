import React, { useEffect } from "react";
import SEO from "../../seo";
import Layout from "../../layout";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  useEffect(() => {
    removeCookie("accessToken");
    router.push('/')
  }, []);
  return (
    <Layout>
      <SEO title="Profile" />
      Wlogowano!
    </Layout>
  );
};
export default Home;
