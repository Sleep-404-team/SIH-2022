import Link from "next/link";

const InternshipListingCard = ({
  title,
  id,
  company,
  children,
  stipend,
  duration,
  lastDate,
  startDate,
  tags,
}) => {
  return (
    <div className="m-auto flex w-1/2 flex-col gap-5 rounded-xl bg-white p-8">
      <div className="text-2xl font-bold">
        {title}
        <span className="font-light"> for </span>
        {company}
      </div>
      <p className="truncate text-lg font-medium">{children}</p>
      <div className="grid grid-flow-col justify-items-start text-left text-sm">
        <div>
          Stipend
          <p className="rounded-md bg-[#1e204c] px-2 py-1 text-white">
            ₹{stipend} / month
          </p>
        </div>
        <div>
          Duration
          <p className="rounded-md bg-[#1e204c] px-2 py-1 text-white">
            {duration}
          </p>
        </div>
        <div>
          Apply By
          <p className="rounded-md bg-[#1e204c] px-2 py-1 text-white">
            {lastDate}
          </p>
        </div>
        <div>
          Start
          <p className="rounded-md bg-[#1e204c] px-2 py-1 text-white">
            {startDate}
          </p>
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="flex gap-2">
          {tags.map((tag, id) => (
            <p
              key={id}
              className="rounded-md bg-[#1e204c] px-2 py-1 text-sm text-white"
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="font-bold uppercase">
          <Link href={`/internships/${id}`}>Apply Now &gt;</Link>
        </div>
      </div>
    </div>
  );
};

const InternshipListings = ({ internships }) => {
  return (
    <div className="my-10 flex flex-col gap-10">
      {internships.map((internship, idx) => (
        <InternshipListingCard
          key={idx}
          title={internship.title}
          id={internship.Id}
          company={internship.company}
          stipend={internship.stipend}
          duration={internship.duration}
          lastDate={internship.lastDate}
          startDate={internship.startDate}
          tags={internship.tags}
        >
          {internship.description}
        </InternshipListingCard>
      ))}
    </div>
  );
};

export default InternshipListings;
