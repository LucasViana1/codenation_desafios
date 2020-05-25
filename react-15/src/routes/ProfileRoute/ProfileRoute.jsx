import React, { useState, useEffect } from "react";

import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";

import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../config/env";

const ProfileRoute = () => {
  const [userInfo, setUserInfo] = useState({});
  const [userPost, setUserPost] = useState({});
  const { username } = useParams();

  useEffect(() => {
    console.log("profile user");
    console.log(username);
    getUserById();
    getUserPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserById = async () => {
    const data = await fetch(`${BASE_URL}users/${username}`, {
      method: "GET",
    }).then((resp) => resp.json());
    console.log("data get user by id");
    console.log(data);
    setUserInfo(data);
  };

  const getUserPost = async () => {
    const data = await fetch(`${BASE_URL}users/${username}/posts`, {
      method: "GET",
    }).then((resp) => resp.json());
    console.log("data get user post");
    console.log(data);
    setUserPost(data);
  };

  return (
    <div data-testid="profile-route">
      <UserProfile
        avatar={userInfo.avatar}
        name={userInfo.name}
        username={userInfo.username}
      />
      <UserPosts posts={userPost} />
    </div>
  );
};

export default ProfileRoute;
