import React from "react";
import classes from "./AddSection.module.css";

function AddSection({ card }) {
  return (
    <div className="flex text-2xl">
      <div className="relative w-10 h-[125px]">
        <div className="flex flex-col items-center absolute left-0">
          <div className={classes.dot}></div>
          <div className={classes.vertical}></div>
        </div>
      </div>
      <div className="flex flex-col justify-end mx-2 w-full">
        <div className="font-medium">{card.institution}</div>
        <div className="flex justify-between">
          <div className="">{card.field}</div>
          <div className="">{card.period}</div>
        </div>
      </div>
    </div>
  );
}

export default AddSection;
