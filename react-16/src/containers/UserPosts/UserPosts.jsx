import React from "react";

import Post from "../../components/Post";

import "./UserPosts.scss";
import Loading from "../../components/Loading";

const UserPosts = ({ posts, user }) => {
  return (
    <div className="container" data-testid="user-posts">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post.id} postInfo={post} userInfo={user} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default UserPosts;
