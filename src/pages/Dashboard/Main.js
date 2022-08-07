import React, { useEffect } from "react";

const Main = ({ title }) => {
  useEffect(() => {
    document.title = title;
    return;
  }, []);
  return (
    <div>
      <h4>Main</h4>
    </div>
  );
};

export default Main;
