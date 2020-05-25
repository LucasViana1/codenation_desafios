import React from "react";

import "./UserProfile.scss";

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="profile-data">
        <div className="user">
          <div className="user__thumb">
            <img src={avatar} alt={username} />
          </div>
          <div className="user__name">
            {name}
            <span>{username}</span>
          </div>
        </div>
      </div>
      {console.log(avatar)}
      {console.log(name)}
      {console.log(username)}
    </section>
  );
};

export default UserProfile;
