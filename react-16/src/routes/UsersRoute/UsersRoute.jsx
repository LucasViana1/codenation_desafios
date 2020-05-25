import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";
import { BASE_URL } from "../../config/env";

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
    // console.log("resp req users");
    // console.log(users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUsers = async () => {
    const data = await fetch(BASE_URL + "users", {
      method: "GET",
    }).then((resp) => resp.json());
    console.log("data");
    console.log(data);
    setUsers(data);
  };

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
