import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ProfileLayout from "../../Components/Profile/ProfileLayout";
import Config from "../../utils/config";
import { useRouter } from "next/router";

const Profile = ({ profile }) => {
  return (
    <div>
      <Navbar />
      <ProfileLayout profile={profile} />
    </div>
  );
};

export default Profile;

export const getServerSideProps = async (context) => {
  const { userId } = context.query;
  const resProfile = await fetch(`${Config.API_URL}/user/${userId}`);
  const profile = await resProfile.json();
  return {
    props: {
      profile,
    },
  };
};
