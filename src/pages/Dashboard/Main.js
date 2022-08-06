import React, { useEffect } from "react";

const Main = ({ title }) => {
  useEffect(() => {
    document.title = title;
    return;
  }, []);
  return <div>Main</div>;
};

export default Main;
