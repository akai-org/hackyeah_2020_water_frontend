import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { getExperience } from "../../api";
const Test = () => {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isLoginIn, setIsLoginIn] = useState(false);
  useEffect(() => {
    try {
      console.log(getExperience());
    } catch (e) {
      console.log(e);
    }
  }, []);
  return <div></div>;
};
export default Test;
