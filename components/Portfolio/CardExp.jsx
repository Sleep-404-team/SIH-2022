const ExperienceCard = ({ experience }) => {
  return (
    <div className="m-auto flex flex-col gap-3 rounded-lg bg-white p-8 text-[#1e204c]">
      <div className="text-2xl font-bold">Experience</div>
      <div className="flex flex-col gap-4">
        {experience.map((exp, id) => (
          <div className="flex gap-3 items-end p-2" key={id}>
            <div className="flex flex-col gap-1">
              <div className="after:content-[' '] after:block after:rounded-2xl after:w-2 after:h-2 after:m-x-11 after:bg-black"></div>
              <div className="after:content-[' '] after:block after:rounded-xl after:w-2 after:h-16 after:m-x-11 after:bg-black"></div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold">{exp.company}</p>
              <p className="text-lg font-medium">{exp.position}</p>
              <p>{exp.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
