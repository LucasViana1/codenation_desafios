import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";

import "./UserForm.scss";
import { BASE_URL } from "../../config/env";

const UserForm = () => {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [imgProfile, setImgProfile] = useState("");
  const [mail, setMail] = useState("");

  const handleInput = (event, type) => {
    const { value } = event.target;
    switch (type) {
      case "name":
        setName(value);
        break;
      case "userName":
        setUserName(value);
        break;
      case "mail":
        setMail(value);
        break;
      case "imgProfile":
        setImgProfile(value);
        break;
      default:
        console.log("Error parse input");
    }
  };

  const handleSubmit = async () => {
    await fetch(`${BASE_URL}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        avatar: imgProfile,
        username: userName,
        email: mail,
      }),
    }).then((resp) => setShowSuccessMsg(true));
  };

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                <img
                  src={
                    imgProfile ||
                    "https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                  }
                  alt={userName}
                />
              </div>
              <p className="user__name">
                {name || "Name"}
                <span>{userName || "@username"}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => handleInput(e, "name")}
              placeholder="Nome Completo"
            />

            <label>Usuário</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => handleInput(e, "userName")}
              placeholder="Ex: user_name"
            />

            <label>Email</label>
            <input
              type="email"
              value={mail}
              onChange={(e) => handleInput(e, "mail")}
              placeholder="Ex: email@email.com.br"
            />

            <label>Url da Imagem de Perfil</label>
            <input
              value={imgProfile}
              onChange={(e) => handleInput(e, "imgProfile")}
              type="text"
              placeholder="http://..."
            />

            <button type="button" onClick={() => handleSubmit()}>
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {showSuccessMsg && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
