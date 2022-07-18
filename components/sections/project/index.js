import { Element } from 'react-scroll';
import ProjectCard from './card';

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
									As part of my Dev Journey, I built some personal projects along with learnings. I
									am also worked as a frontend developer with one of the major student body on
									campus. I started a blog site where I discuss about some algorithmic problems.
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
