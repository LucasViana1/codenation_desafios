import React from "react";

import Post from "../../components/Post";

import "./UserPosts.scss";

const UserPosts = ({ posts }) => {
  return (
    <div className="container" data-testid="user-posts">
      <Post postInfo={posts} userInfo={{}} />
    </div>
  );
};

export default UserPosts;
