import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";

import "./UserForm.scss";

const UserForm = () => {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                <img
                  src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                  alt=""
                />
              </div>
              <p className="user__name">
                name
                <span>@username</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input type="text" value="name" placeholder="Nome Completo" />

            <label>Usuário</label>
            <input type="text" value="username" placeholder="Ex: user_name" />

            <label>Email</label>
            <input
              type="email"
              value="email"
              placeholder="Ex: email@email.com.br"
            />

            <label>Url da Imagem de Perfil</label>
            <input type="text" placeholder="http://..." />

            <button type="button">Cadastrar</button>
          </div>
        </div>
      </section>

      {showSuccessMsg && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
