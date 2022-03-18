import React from "react";
import AddSectionEdu from "./AddSectionEdu";

function EducationCard({ education }) {
  return (
    <div className="text-[#1e214d]  bg-white rounded-2xl h-[55vh] p-5">
      <div className="text-5xl font-bold my-4 mx-2">Education</div>
      <div className="grid grid-cols-1 gap-4">
        {education.map((edu) => (
          <AddSectionEdu card={edu} />
        ))}
      </div>
    </div>
  );
}

export default EducationCard;
