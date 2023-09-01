import { softwareProjects } from './projects';
import ProjectCard from './project_card';

function ProjectsPage() {
  const allProjects = softwareProjects;

  return (
    <div
      className='my-8 grid grid-cols-3 gap-4 lg:my-20 lg:mb-60 lg:grid-cols-3 lg:gap-8'
      style={{}}
    >
      {allProjects.map((project, index) => {
        return (
          <div key={index} className='col-span-3 lg:col-span-1'>
            <ProjectCard project={project} />
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsPage;
