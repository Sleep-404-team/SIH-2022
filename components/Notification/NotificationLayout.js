import React from "react";
import Notification from "./Notification";
import Schedule from "./Schedule";

function NotificationLayout() {
  return (
    <div>
      <div className="ml-[10vw] mr-[5vw] h-screen pt-[5vh] pb-[3vh] flex ">
        <div className="w-3/5">
          <div className="text-4xl text-[#1e214d] mb-2 font-bold">Notifications</div>
          <Notification />
        </div>
        <div className="w-2/5 mx-4">
          <div className="text-4xl text-[#1e214d] mb-2 font-bold">Schedule</div>
          <Schedule/>
        </div>
      </div>
    </div>
  );
}

export default NotificationLayout;
