import React from "react";
import "./user-info.scss";
const UserInfo = ({ data }) => {
  const { name } = data;
  return <div>{name}</div>;
};

export default UserInfo;
