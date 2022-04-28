import React from "react";
import "./css/Login.css";
import { accessUrl } from "./utility/spotify";

const banner = require("./assets/Spotify_X_Anioke_1.png");

function Login() {
  return (
    <div>
      <div className="login">
        <img src={banner} alt="logo" />
        <a href={accessUrl}>Login with Spotify</a>
      </div>
    </div>
  );
}

export default Login;
