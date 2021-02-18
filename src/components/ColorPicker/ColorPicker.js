import React from "react";
import ColorList from "../ColorList/ColorList";
import ColorSettings from "../ColorSettings/ColorSettings";




const ColorPicker = () => {
  return (
    <div>
      <h1>ColorPicker</h1>
      <ColorList />
      <ColorSettings />
    </div>
  );
};

export default ColorPicker;
