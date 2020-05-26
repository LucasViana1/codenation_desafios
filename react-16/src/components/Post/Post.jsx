import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Post.scss";

const Post = ({ postInfo, userInfo }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [like, setLike] = useState(false);

  const { comments, imageUrl } = postInfo;
  const { avatar, name } = userInfo;

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
              <img src={avatar} alt={name} />
            </a>
            <a className="user__name" href="/">
              {name}
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
          <img src={imageUrl} alt={name} />
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
              {comments.length > 0 && (
                <span>
                  curtido por <Link to="/">{comments[0].name}</Link>
                  <span> e outra{comments.length + like > 2 ? "s " : " "}</span>
                  <Link to="/">
                    {comments.length + like - 1} pessoa
                    {comments.length + like > 2 ? "s " : " "}
                  </Link>
                </span>
              )}
            </div>
          </div>
        </nav>
      </div>
    </article>
  );
};

export default Post;
