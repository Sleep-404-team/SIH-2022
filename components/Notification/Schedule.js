import React from "react";
import ScheduleCard from "./ScheduleCard";

function Schedule() {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg h-[75vh]">
      
      <div className=" w-4/5 grid grid-cols-1 gap-4 mt-4">
        <ScheduleCard />
        <ScheduleCard />
      </div>
    </div>
  );
}

export default Schedule;
