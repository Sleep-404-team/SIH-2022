import React from "react";
import classes from "./Dashboard.module.css";
import Search from "../Search/Search";
import DashboardCard from "./DashboardCard";

// importing images
import arrow from "../../public/images/forMore/arrow.svg";
import web from "../../public/images/forMore/web.svg";

function Dashboard() {
  return (
    <div className="text-[#1e214d]">
      {/* Search bar on top */}
      <Search />

      {/* Name of user */}
      <div className="my-2 text-5xl font-bold">Good Morning , Name.</div>

      {/* Numbers grid */}
      <div className="my-2 grid grid-cols-3 gap-1">
        <div className="flex flex-col justify-center items-center">
          <div className={classes.textShadow}>2</div>
          <div className="text-2xl font-medium">ACTIVE</div>
          <div className="text-sm">DETAILS &gt;</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className={classes.textShadow}>7</div>
          <div className="text-2xl font-medium">APPLIED</div>
          <div className="text-sm">VIEW MORE &gt;</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className={classes.textShadow}>10</div>
          <div className="text-2xl font-medium">OPPURTUINITES</div>
          <div className="text-sm">BROWSE &gt;</div>
        </div>
      </div>

      {/* For you title */}
      <div className="my-2 text-5xl font-bold">For You <img src={arrow.src} alt="" className="inline" /> </div>
      {/* For you grid */}
      <div className="grid grid-cols-3 gap-10">
        <DashboardCard img={web.src} title="Web Development" />
        <DashboardCard img={web.src} title="Web Development" />
        <DashboardCard img={web.src} title="Web Development" />
      </div>
    </div>
  );
}

export default Dashboard;
