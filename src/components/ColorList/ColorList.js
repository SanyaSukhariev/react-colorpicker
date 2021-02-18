import React from "react";
import classes from "../ColorList/ColorList.module.css";


const ColorList =()=>{
    return(
        <select className={classes.item}>
        <option value="Red"> RED </option>
        <option value="Yellow"> YELLOW </option>
        <option value="Green"> GREEN </option>
        <option value="Blue"> BLUE </option>
      </select>
    )
}

export default ColorList