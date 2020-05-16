import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "../Login";

function UserList() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => {
        setUsers(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.error("[UserList.js]", err.message);
      });
  }, []);

  const emails = Users.map((user) => {
    return user.email;
  });

  const ids = Users.map((user) => {
    return user.id;
  });

  console.log(emails);

  return (
    <div>
      <Login emails={emails} ids={ids} />
    </div>
  );
}

export default UserList;
