import React from "react";
import { makeStyles } from "@material-ui/core";
const BusInformation = () => {
    const classes=useStyles();
    return (
        <div>
            <h1>Bus Information</h1>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    input: {
      color: "#FFF",
    },
  }));

export default BusInformation;