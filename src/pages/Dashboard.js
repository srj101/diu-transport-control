import styled from "@emotion/styled";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
const drawerWidth = 240;
const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <Main open={open}>
        <Toolbar />
        <Outlet />
      </Main>
    </Box>
  );
};

export default Dashboard;
