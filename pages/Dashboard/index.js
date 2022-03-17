import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import DashboardLayout from "../../Components/Dashboard/DashboardLayout";
import ProfileLayout from "../../Components/Profile/ProfileLayout";

const Home = () => {
  return <div>
    <Navbar />
    <DashboardLayout/>
    {/* <ProfileLayout/> */}
  </div>;
};

export default Home;