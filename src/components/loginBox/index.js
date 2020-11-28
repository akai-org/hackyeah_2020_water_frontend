import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import classes from "./index.module.scss";
import { FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthProvider";

function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [cookies, setCookie] = useCookies();
  const onFailure = (a) => {
    window.setAlert("warning", `Nie uda się zalogować. Powód: ${a.error}`);
    window.loading.close();
  };
  const onRequest = () => {
    window.loading.open();
  };
  const GoogleButton = ({ onClick, disabled }) => (
    <button
      className={classes.login_button}
      onClick={onClick}
      disabled={disabled}
    >
      <FcGoogle fontSize={40} />
      &nbsp;&nbsp;<span>Sign in</span>
    </button>
  );
  return (
    <div className={classes.box}>
      <div className={classes.icon}>
        <FaUserAlt fontSize={120} color="white" />
      </div>
      <div className={classes.logo}>Water Save Quarter</div>
      <GoogleLogin
        // isSignedIn={true} // if is loggin, its run 'onSuccess'
        clientId={process.env.NEXT_PUBLIC_GOOGLE_LOGIN_ID}
        onRequest={onRequest}
        onSuccess={login}
        onFailure={onFailure}
        render={GoogleButton}
      />
    </div>
  );
}

export default Login;
