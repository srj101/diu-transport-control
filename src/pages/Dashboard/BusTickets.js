import React from "react";
import { makeStyles } from "@material-ui/core";
const BusTickets = () => {
  const classes = useStyles();
  return (
    <div>
      <h4>Hello</h4>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#FFF",
  },
}));

export default BusTickets;
