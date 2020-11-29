import React, { useState, useContext, createContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { authGoogleBackend } from "../api";
import { useRouter } from "next/router";
const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (cookies.accessToken) {
        // console.log("login with token cookie");
        await login({ accessToken: cookies.accessToken }, true);
      }
      setLoading(false);
    })();
  }, []);

  const login = async (a, fromCookie) => {
    try {
      if (a?.accessToken == undefined) return;
      const result = await authGoogleBackend(a.accessToken);
      const { token, user } = result;
      setUser(user);
      setIsLoggedIn(true);
      setCookie("accessToken", a.accessToken);
      setCookie("token", token + "-" + user.id);
      window.setAlert("success", "Pomyślnie cię zalogowano!");
      if (!fromCookie) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      window.setAlert("error", "Nie udało się zalogować ;(");
    } finally {
      window.loading.close();
    }
  };

  const logout = async (a) => {
    setUser({});
    setIsLoggedIn(false);
    removeCookie("accessToken");
    removeCookie("token");
    window.setAlert("success", "Pomyślnie cię wylogowano!");
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, loading }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
