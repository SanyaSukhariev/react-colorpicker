import React from "react";
import classes from "../ColorList/ColorList.module.css";


const ColorList =()=>{
    return(
        <ul className={classes.item}>
        <li value="Red"> RED </li>
        <li value="Yellow"> YELLOW </li>
        <li value="Green"> GREEN </li>
        <li value="Blue"> BLUE </li>
      </ul>
    )
}

export default ColorList