import React, { useEffect } from "react";

const Users = ({ title }) => {
  useEffect(() => {
    document.title = title;
    return;
  }, []);
  return <div>Users</div>;
};

export default Users;
