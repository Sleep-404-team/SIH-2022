import React from "react";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import ProfileCard from "./ProfileCard";

function ProfileLayout({ profile }) {
  const Card = {
    name: profile.name,
    title: profile.title,
    social: profile.social,
    about: profile.about,
    skills: profile.skills,
  };

  return (
    <div className="ml-[10vw] mr-[5vw] pt-[7vh] pb-[5vh] grid grid-cols-1 gap-6">
      <ProfileCard card={Card} />
      <ExperienceCard experience={profile.experience} />
      <EducationCard education={profile.education} />
    </div>
  );
}

export default ProfileLayout;
