import Link from "next/link";

const InternshipPage = ({ internship }) => {
  return (
    <div className="gap-15 my-10 flex flex-col gap-10">
      <div className="m-auto flex w-1/2 flex-col gap-3 rounded-xl bg-white p-8">
        <div className="text-2xl font-bold">{internship.title}</div>
        <div className="text-xl font-bold">{internship.company}</div>
        <p className="text-lg font-medium">{internship.description}</p>
      </div>
      <div className="m-auto flex w-1/2 flex-col gap-3 rounded-xl bg-white p-8">
        <div className="text-2xl font-bold">Skills Required</div>
        <div className="flex gap-2">
          {internship.tags.map((tag, id) => (
            <p
              key={id}
              className="rounded-md bg-[#1e204c] px-2 py-1 text-sm text-white"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="m-auto flex w-1/2 flex-col gap-3 rounded-xl bg-white p-8">
        <div className="text-2xl font-bold">Perks</div>
        <div className="flex gap-2">
          {internship.perks.map((perk, id) => (
            <p
              key={id}
              className="rounded-md bg-[#1e204c] px-2 py-1 text-sm text-white"
            >
              {perk}
            </p>
          ))}
        </div>
      </div>
      <div className="m-auto flex w-1/2 flex-col gap-3 rounded-xl bg-white p-8">
        <div className="text-2xl font-bold">Tasks</div>
        <div className="flex flex-col gap-2">
          {internship.tasks.map((task, id) => (
            <p
              key={id}
              className="rounded-md bg-[#1e204c] p-2 text-sm text-white"
            >
              {task}
            </p>
          ))}
        </div>
      </div>
      <div className="m-auto flex w-1/2 flex-col gap-3 rounded-xl bg-white p-8">
        <div className="text-2xl font-bold">More Info</div>
        <div className="flex flex-col gap-2 font-bold">
          <div>
            Location
            <span className="rounded-md ml-2 bg-[#1e204c] px-2 py-1 text-sm text-white">
              {internship.location}
            </span>
          </div>
          <div>
            Start Date
            <span className="rounded-md ml-2 bg-[#1e204c] px-2 py-1 text-sm text-white">
              {internship.startDate}
            </span>
          </div>
          <div>
            Duration
            <span className="rounded-md ml-2 bg-[#1e204c] px-2 py-1 text-sm text-white">
              {internship.duration}
            </span>
          </div>
          <div>
            Stipend
            <span className="rounded-md ml-2 bg-[#1e204c] px-2 py-1 text-sm text-white">
              {internship.stipend}
            </span>
          </div>
          <div>
            Openings
            <span className="rounded-md ml-2 bg-[#1e204c] px-2 py-1 text-sm text-white">
              {internship.opening}
            </span>
          </div>
          <div>
            Applicants
            <span className="rounded-md ml-2 bg-[#1e204c] px-2 py-1 text-sm text-white">
              {internship.applicants}
            </span>
          </div>
        </div>
      </div>
      <div className="m-auto w-min rounded-lg bg-[#1e204c] px-6 py-2 text-xl text-white">
        <a href="#">Apply&nbsp;Now</a>
      </div>
    </div>
  );
};

export default InternshipPage;
