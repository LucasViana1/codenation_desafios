import React from "react";

import { Link } from "react-router-dom";

const User = ({ infoUser }) => {
  const { name, avatar, username, id } = infoUser;

  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <Link to={`/users/${id}`}>
          <div className="user">
            <div className="user__thumb">
              <img src={avatar} alt={username} />
            </div>
            <div className="user__name">{name}</div>
          </div>
        </Link>
      </header>
    </article>
  );
};

export default User;
