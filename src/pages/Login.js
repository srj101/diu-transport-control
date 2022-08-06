import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Login = ({ title }) => {
  useEffect(() => {
    document.title = title;
    return;
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="loginPage">
      <div className="loginForm">
        <Typography
          variant="h6"
          component={`div`}
          noWrap
          style={{ padding: "15px" }}
        >
          Welcome to Daffodil Transportation
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          ullam, maxime exercitationem similique laudantium minima error itaque
          repellendus eligendi est impedit fugit odus voluptatibus recusandae
          quibusdam
        </p>
        <Divider />
        <form className="inputFields">
          <FormControl style={{ marginBottom: "20px" }}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              type="email"
              id="email"
              aria-describedby="my-helper-text"
              required
              sx={{ input: { color: "#fff" } }}
            />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input
              type="password"
              id="password"
              aria-describedby="my-helper-text"
              required
              sx={{ input: { color: "#fff" } }}
            />
          </FormControl>

          <FormControl style={{ display: "inline-block", margin: "30px 0" }}>
            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit}
              color="primary"
            >
              Login
            </Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default Login;
