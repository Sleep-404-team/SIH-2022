import React from "react";

function ScheduleCard() {
  return (
    <div>
      <div className="grid grid-rows-2 text-white rounded-2xl bg-[#1e214d] px-4 ">
        <div className="flex items-center">
          <div className=" text-lg font-medium">Meeting with Sleep 404</div>
        </div>
        <div className="flex items-center mt-4">
          <div className="">11-03-2022 ; 11:45 IST</div>
          <div className=" text-lg font-medium ml-auto">Details &gt;</div>
        </div>
        
      </div>
    </div>
  );
}

export default ScheduleCard;
