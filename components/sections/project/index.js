import { Element } from "react-scroll";
import ProjectCard from "./card";

function Projects({ project_items }) {
  return (
    <Element name='my-projects-section'>
      <section className='brand_area' id='portfolio'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <div className='main_title'>
                <h2>projects</h2>
                <p>
                  As part of my dev journey, I built some hobby projects along with system
                  architecture using docker container which can be replicated to a live production
                  environment. you can find all of my projects on my{" "}
                  <a href='https://github.com/nil1729' target='_blank' rel='noreferrer noopener'>
                    Github
                  </a>{" "}
                  profile or search for this keyword{" "}
                  <a
                    href='https://www.google.com/search?q=nil1729'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    nil1729
                  </a>{" "}
                  on your browser.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='skill_container' id='project-items'>
                {project_items.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    project_type={project.project_type}
                    link_type={project.link_type}
                    link_url={project.link_url}
                    description={project.description}
                    date={project.date}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Projects;
