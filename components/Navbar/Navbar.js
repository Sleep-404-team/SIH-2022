import React from "react";
import pic from "../../public/images/nav/pic.svg";
import dashboard from '../../public/images/nav/dashboard.svg'
import internship from '../../public/images/nav/internship.svg'
import chat from '../../public/images/nav/chat.svg'
import resources from '../../public/images/nav/resources.svg'
import apps from '../../public/images/nav/apps.svg'
import gear from "../../public/images/nav/gear.svg";
import exit from "../../public/images/nav/exit.svg";

function Navbar() {
  return (
    <div className="fixed left-0 bottom-0 w-[4vw] h-screen ">
      <div className="flex flex-col items-center bg-[#1e214d] h-screen rounded-r-[45px]">

        <div className="mt-5">
          <div className="my-7 w-8">
            <img src={pic.src} alt="img" />
          </div>
          <div className="my-7 w-7">
            <img src={dashboard.src} alt="img" />
          </div>
          <div className="my-7 w-7">
            <img src={internship.src} alt="img" />
          </div>
          <div className="my-7 w-7">
            <img src={chat.src} alt="img" />
          </div>
          <div className="my-7 w-7">
            <img src={resources.src} alt="img" />
          </div>
        </div>

        <div className="mt-auto mb-5">
          <div className="my-7 w-7">
            <img src={gear.src} alt="img" />
          </div>
          <div className="my-7 w-7">
            <img src={exit.src} alt="img" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
