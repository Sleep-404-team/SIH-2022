import React from "react";
import AddSectionExp from "./AddSectionExp";

function ExperienceCard({ experience }) {
  return (
    <div className="text-[#1e214d]  bg-white rounded-2xl h-[55vh] p-5">
      <div className="text-5xl font-bold my-4 mx-2">Experience</div>
      <div className="grid grid-cols-1 gap-4">
        {experience.map((exp) => {
          return <AddSectionExp card={exp} />;
        })}
      </div>
    </div>
  );
}

export default ExperienceCard;
