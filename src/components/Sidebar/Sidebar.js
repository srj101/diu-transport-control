import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import RouteIcon from "@mui/icons-material/Route";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import { Typography, useTheme, styled, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Sidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon color="white" />
          ) : (
            <ChevronRightIcon color="white" />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider color="white" />
      <Typography
        variant="p"
        component={`div`}
        noWrap
        style={{ padding: "15px" }}
      >
        Ticket Management
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              borderRight: "5px solid #FFF",
            }}
          >
            <ListItemIcon>
              <DashboardIcon color="white" />
            </ListItemIcon>
            <ListItemText primary={`Dashboard`} onClick={() => navigate("/")} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DocumentScannerIcon color="white" />
            </ListItemIcon>
            <ListItemText
              primary={`Bus Tickets`}
              onClick={() => navigate("/bustickets")}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DirectionsBusFilledIcon color="white" />
            </ListItemIcon>
            <ListItemText
              primary={`Bus Information`}
              onClick={() => navigate("/businformation")}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <RouteIcon color="white" />
            </ListItemIcon>
            <ListItemText
              primary={`Bus Route`}
              onClick={() => navigate("/busroute")}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider color="white" />
      <Typography
        variant="p"
        component={`div`}
        noWrap
        style={{ padding: "15px" }}
      >
        Employee Management
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PeopleAltIcon color="white" />
            </ListItemIcon>
            <ListItemText
              primary={`Employees`}
              onClick={() => navigate("/Employees")}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <GroupAddIcon color="white" />
            </ListItemIcon>
            <ListItemText
              primary={`Assign`}
              onClick={() => navigate("/Employees")}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider color="white" />
      <Typography
        variant="p"
        component={`div`}
        noWrap
        style={{ padding: "15px" }}
      >
        Schedule Management
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DepartureBoardIcon color="white" />
            </ListItemIcon>
            <ListItemText primary="Schedule" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider color="white" />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon color="white" />
            </ListItemIcon>
            <ListItemText primary={`Sign-out`} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
