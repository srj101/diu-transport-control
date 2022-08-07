import React from "react";
import { makeStyles } from "@material-ui/core";
const BusRoute = () => {
    const classes=useStyles();
    return (
        <div>
            <h1>Bus Route</h1>
        </div>
    );
};
const useStyles=makeStyles((theme)=>({
    input:{
        color:"#fff",
    },
}));

export default BusRoute;