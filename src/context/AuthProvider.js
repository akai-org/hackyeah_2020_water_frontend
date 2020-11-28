import React, { useState, useContext, createContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { authGoogleBackend } from "../api";
import { useRouter } from "next/router";
const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log("useeffect");
    if (cookies.token) {
      login();
    }
  }, []);

  const login = async (a) => {
    if (a?.accessToken == undefined) return;
    try {
      const result = await authGoogleBackend(a.accessToken);
      const { token, user } = result;
      setUser(user);
      setIsLoggedIn(true);
      setCookie("accessToken", a.accessToken);
      setCookie("token", token + "-" + user.id);
      window.setAlert("success", "Pomyślnie cię zalogowano!");
      router.push("/");
    } catch (err) {
      console.log(err);
      console.log("Cos poszlo nie tak :(");
    } finally {
      window.loading.close();
    }
  };

  const logout = async (a) => {
    // setUser({});
    // setIsLoggedIn(false);
    // removeCookie("accessToken");
    // removeCookie("token");
    window.setAlert("success", "Pomyślnie cię wylogowano!");
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
