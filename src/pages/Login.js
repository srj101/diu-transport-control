import React, { useEffect } from "react";

const Login = ({ title }) => {
  useEffect(() => {
    document.title = title;
    return;
  }, []);
  return <div>Login</div>;
};

export default Login;
