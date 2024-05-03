import Link from 'next/link.js';
import { projectData } from './data.js';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData && projectData.map((project) => (

          <div className="project-card" key={project.id}>
            <Link href={project.detailLink}>
              <div className="project-header">
                <i className="fa-regular fa-folder-open folder-icon"></i>
                {project.gitHubLink != "" &&
                  <div className="small-icons">
                    <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a>
                  </div>}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          </div>

        ))
        }
      </div>
    </div>
  )
}

export default Projects;