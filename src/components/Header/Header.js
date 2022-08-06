import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
const drawerWidth = 240;
const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          DIU Smart Transport Control
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
