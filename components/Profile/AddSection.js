import React from "react";
import classes from "./AddSection.module.css";

function AddSection() {
  return (
    <div className="flex text-2xl">
      <div className="relative w-10 h-[125px]">
        <div className="flex flex-col items-center absolute left-0">
          <div className={classes.dot}></div>
          <div className={classes.vertical}></div>
        </div>
      </div>
      <div className="flex flex-col justify-end mx-2">
        <div className="font-medium">Sleep 404</div>
        <div className="flex justify-between">
          <div className="">Full Stack Developer</div>
          <div className="">18-09-2021</div>
        </div>
      </div>
    </div>
  );
}

export default AddSection;
