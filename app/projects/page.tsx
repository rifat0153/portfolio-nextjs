import { softwareProjects } from './projects';
import ProjectCard from './project_card';

function ProjectsPage() {
  const allProjects = softwareProjects;

  return (
    <div
      className='my-8 columns-1 gap-4 lg:my-20 lg:mb-60 lg:columns-3 lg:grid-cols-3 lg:gap-8'
      style={{
        gridTemplateRows: 'masonry',
      }}
    >
      {allProjects.map((project, index) => {
        return (
          <div key={index} className='col-span-3 py-4  lg:col-span-1'>
            <ProjectCard project={project} />
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsPage;
