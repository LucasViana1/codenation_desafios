import React from "react";

import Post from "../../components/Post";

import "./UserPosts.scss";
import Loading from "../../components/Loading";

const UserPosts = ({ posts /*, user*/ }) => {
  return (
    <div className="container" data-testid="user-posts">
      {console.log("posts user component")}
      {console.log(posts)}
      {/* SERA UM ARRAY FUTURAMENTE */}
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} posts={post} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default UserPosts;
