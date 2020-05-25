import React, { useEffect } from "react";

import Post from "../../components/Post";

const Posts = ({ posts, getUserHandler }) => {
  return (
    <div className="container" data-testid="posts">
      {console.log("posts filho")}
      {console.log(posts)}
      <section className="feed">
        <Post />
      </section>
    </div>
  );
};
export default Posts;
