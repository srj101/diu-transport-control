import React from "react";
import "./user-info.scss";
const UserInfo = ({ data }) => {
  const { name } = data;
  return <div style={{ textAlign: "right", fontWeight: "bolder" }}>{name}</div>;
};

export default UserInfo;
