import Link from "next/link";

const FeaturedInternshipCard = ({ title, id, children, tags }) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-white p-8">
      <div className="text-xl font-bold">{title}</div>
      <p className="truncate font-medium">{children}</p>
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
      </div>
      <div className="font-bold uppercase">
        <Link href={`/internships/${id}`}>More Info &gt;</Link>
      </div>
    </div>
  );
};

const FeaturedInternships = ({ featuredInternships }) => {
  return (
    <div className="my-10">
      <div className="font-bold text-4xl text-[#1e204c] mb-5">
        Featured Internships
      </div>
      <div className="grid grid-cols-3 gap-5">
        {featuredInternships.slice(0, 6).map((internship, idx) => (
          <FeaturedInternshipCard
            key={idx}
            title={internship.title}
            id={internship.Id}
            company={internship.company}
            stipend={internship.stipend}
            tags={internship.tags}
          >
            {internship.description}
          </FeaturedInternshipCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedInternships;
