import { ProfileCard, FeaturedProjects } from ".";

const Portfolio = () => {
  return (
    <div className="m-10 grid grid-cols-5 gap-y-10">
      <div className="col-span-2 w-2/3 mx-auto">
        <ProfileCard />
      </div>
      <div className="col-span-3">
        <FeaturedProjects />
      </div>
    </div>
  );
};

export default Portfolio;
