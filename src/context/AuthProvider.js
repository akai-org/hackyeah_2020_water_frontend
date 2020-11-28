import React, { useState, useContext, createContext ,useEffect} from "react";
import { useCookies } from "react-cookie";
import { authBackend } from "../api";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [accessToken, setAccessToken] = useState(cookies.accessToken || "");
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("accessToken p", accessToken);

  useEffect(() => {
    login()
  }, [])
  const login = async (a) => {
    try {
      const result = await authBackend(a?.accessToken||accessToken); // bool && obiekt
      console.log("res google", result);
      const { token, user } = result;
      setAccessToken(token);
      setUser(user);
      setIsLoggedIn(true);
      setCookie("accessToken", token);
      // router.push("/profile?success");
    } catch (err) {
      console.log("Cos poszlo nie tak :(");
      setAccessToken("");
      setUser({});
    } finally {
      window.loading.close();
    }
  };

  const logout = async (a) => {
    setAccessToken("");
    setUser({});
    setIsLoggedIn(false);
    removeCookie("accessToken");
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, user, isLoggedIn: isLoggedIn, login, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
