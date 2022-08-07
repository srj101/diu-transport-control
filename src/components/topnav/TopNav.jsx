import React from "react";
import "./topnav.scss";
import Greeting from "../greeting/Greeting";
import { data } from "../../constants";

const TopNav = () => {
  const openSidebar = () => {
    document.body.classList.add("sidebar-open");
  };

  return (
    <div className="topnav">
      <Greeting user={data.user} />
      <div className="sidebar-toggle" onClick={openSidebar}>
        <i className="bx bx-menu-alt-right"></i>
      </div>
    </div>
  );
};

export default TopNav;
