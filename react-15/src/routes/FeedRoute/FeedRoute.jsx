import React, { useState, useEffect } from "react";

import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";

import "./FeedRoute.scss";

const FeedRoute = () => {
  return (
    <div>
      <Stories />
      <Posts />
    </div>
  );
};

export default FeedRoute;
