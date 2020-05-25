import React, { useEffect } from "react";

import Post from "../../components/Post";

const Posts = ({ posts, getUserHandler }) => {
  useEffect(() => {
    // console.log("posts");
    // console.log(posts);
    // console.log(getUserHandler);
  }, [getUserHandler, posts]);
  return (
    <div className="container" data-testid="posts">
      <section className="feed">
        <Post />
      </section>
    </div>
  );
};
export default Posts;
