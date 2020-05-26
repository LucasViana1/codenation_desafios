import React, { useState, useEffect } from "react";

import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";
import Posts from "../../containers/Posts";
import { BASE_URL } from "../../config/env";

import "./FeedRoute.scss";

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [usersFound, setUsersFound] = useState(0);

  const getUserPostById = (postUserId) =>
    users.find((user) => postUserId === user.id);

  useEffect(() => {
    getUsers(1, 20);
  }, []);

  useEffect(() => {
    if (usersFound === users.length) return;

    getPosts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users, usersFound]);

  useEffect(() => {
    getStories();
  }, [users]);

  const getUsers = async (page, limit) => {
    const data = await fetch(`${BASE_URL}users?page=${page}&limit=${limit}`, {
      method: "GET",
    }).then((resp) => resp.json());

    setUsers(data);
  };
  const getPosts = async () => {
    const data = await fetch(`${BASE_URL}users/${users[usersFound].id}/posts`, {
      method: "GET",
    }).then((resp) => resp.json());
    setPosts([...posts, ...data]);
    setUsersFound(usersFound + 1);
  };
  const getStories = async () => {
    const data = await fetch(`${BASE_URL}stories`, {
      method: "GET",
    }).then((resp) => resp.json());
    setStories(data);
  };

  return (
    <div data-testid="feed-route">
      {users.length > 0 && stories.length > 0 && (
        <Stories stories={stories} getUserHandler={getUserPostById} />
      )}

      {users.length !== usersFound ? (
        <Loading />
      ) : (
        <Posts posts={posts} getUserHandler={getUserPostById} />
      )}
    </div>
  );
};

export default FeedRoute;
