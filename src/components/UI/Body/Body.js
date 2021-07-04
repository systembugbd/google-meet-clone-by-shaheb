import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import("./Body.scss");

function Body() {
  return (
    <div className="body">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default Body;
