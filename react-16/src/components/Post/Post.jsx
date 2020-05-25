import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Post.scss";

// POSTS DEVE VARIAR PARA O FEED E PARA UM USER ESPECIFICO

const Post = ({ postInfo, userInfo }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [like, setLike] = useState(false);

  const following = () => {
    setIsFollowing(!isFollowing);
  };
  const liking = () => {
    setLike(!like);
  };

  return (
    <article className="post" data-testid="post">
      <div className="post__header">
        <div className="post__header--user">
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
          <button className="post__context">
            <span
              className={`follow-btn ${isFollowing ? "is-following" : ""}`}
              onClick={(e) => following()}
            >
              {isFollowing ? "Seguindo" : "Seguir"}
            </span>
          </button>
        </div>
        <div className="post__figure">
          <img
            src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-1.jpg"
            alt=""
          />
        </div>
        <nav className="post__controls">
          <button onClick={(e) => liking()}>
            <i
              className={`${
                like ? "fas" : "far"
              } fa-heart post__controls--heart`}
            ></i>
          </button>
          <div className="post__status">
            <div className="user">
              <span>
                curtido por <a href="/">Santino Rowe</a>
                <span> e outra </span>
                <a href="/">1 pessoas</a>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </article>
  );
};

export default Post;
