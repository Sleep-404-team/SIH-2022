const FeaturedProjects = ({ projects }) => {
  return (
    <div className="m-auto flex flex-col gap-3 rounded-lg bg-white p-8 text-[#1e204c]">
      <div className="text-2xl font-bold">Featured Projects</div>
      <div className="grid grid-cols-2 gap-5">
        {projects.map((project, idx) => (
          <div
            className="flex flex-col gap-2 bg-[#1e204c] text-white rounded-lg p-5"
            key={idx}
          >
            <p className="text-lg font-bold">{project.name}</p>
            <p className="text-sm">{project.description}</p>
            <a
              href={project.url}
              className="w-min test-medium text-sm bg-white px-1 text-[#1e204c] rounded-md"
            >
              More&nbsp;Info
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
