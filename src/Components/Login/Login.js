import React from "react";
import "./Login.css";
import Icon from "./icon.png";
import Logo from "./Logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../Firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
const [state, dispatch] = useStateValue();

  const signIn = () => {
    // sign in auth
    auth
      .signInWithPopup(provider)
      .then(result => {

        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        })

    })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={Icon} alt="" />
        <img src={Logo} alt="" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
