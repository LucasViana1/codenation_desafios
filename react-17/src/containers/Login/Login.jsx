import React, { useState } from "react";
import "./Login.scss";
import Ink from "react-ink";

import { endpoints } from "../../modules/endpoints";
import { Logo } from "../../components";

const Login = () => {
  const { url } = endpoints.getAuthorization;
  return (
    <main className="login">
      <section className="container">
        <Logo />
        <p className="login__microcopy">
          Não toca a música inteira,
          <strong>
            mas toca o seu
            <span
              className="login__microcopy__heart"
              role="img"
              aria-label="heart"
            >
              ❤️
            </span>
          </strong>
        </p>

        <a href={url} className="login__auth-button">
          Entrar com Spotify
          <Ink />
        </a>
      </section>
    </main>
  );
};

export default Login;
