import { ProfileCard, FeaturedProjects } from ".";

const Portfolio = () => {
  return (
    <div className="mx-auto my-10 grid grid-cols-3 gap-y-10 gap-x-10 w-3/4">
      <div className="col-span-1">
        <ProfileCard />
      </div>
      <div className="col-span-2">
        <FeaturedProjects />
      </div>
    </div>
  );
};

export default Portfolio;
