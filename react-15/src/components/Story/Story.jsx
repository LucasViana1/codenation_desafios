import React, { useCallback, useState } from "react";

import { Link } from "react-router-dom";
import { BASE_URL } from "../../config/env";

import "./Story.scss";

const Story = ({ story, user, handleClose }) => {
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <a className="user__thumb" href="/">
              <img
                src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg"
                alt="T'Challa"
              />
            </a>
            <a className="user__name" href="/">
              T'Challa
            </a>
          </div>

          <button className="story__close">
            <i className="fas fa-times" />
          </button>
        </header>
        <div className="story__progress">
          <div className="story__progress__elapsed"></div>
        </div>
      </div>
      <div className="container">
        <section className="story__video__wrapper">
          <video
            autoPlay=""
            className="video-player"
            loop=""
            playsInline=""
            src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/black-panther/black-panther-stories.mp4"
          ></video>
        </section>
      </div>
    </section>
  );
};

export default Story;
