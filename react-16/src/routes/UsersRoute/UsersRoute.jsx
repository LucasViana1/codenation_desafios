import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";
import { BASE_URL } from "../../config/env";

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await fetch(BASE_URL + "users", {
      method: "GET",
    }).then((resp) => resp.json());

    setUsers(data);
  };

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
