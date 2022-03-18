import { ProfileCard, FeaturedProjects, CardEdu, CardExp } from ".";

const Portfolio = ({ profile }) => {
  const userData = {
    name: profile.name,
    title: profile.title,
    social: profile.social,
    about: profile.about,
    skills: profile.skills,
    userId: profile.userId,
  };

  return (
    <div className="mx-auto my-10 grid grid-cols-3 gap-y-10 gap-x-10 w-3/4">
      <div className="col-span-1">
        <ProfileCard card={userData} />
      </div>
      <div className="col-span-2">
        <FeaturedProjects projects={profile.projects} />
      </div>
      <div className="col-span-3">
        <CardExp title="Experience" experience={profile.experience} />
      </div>
      <div className="col-span-3">
        <CardEdu title="Education" education={profile.education} />
      </div>
    </div>
  );
};

export default Portfolio;
