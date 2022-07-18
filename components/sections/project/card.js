function ProjectCard({ title, description, date, link_type, link_url, project_type }) {
	return (
		<div className='card__container'>
			<div className='main__content'>
				<h5 className='title__card'>{title}</h5>
				<h6 className='short__desc'>{project_type}</h6>
				<div className='short__info'>
					<p className='date__duration'>
						<i className='mr-2 fal fa-calendar-day'></i> {date}
					</p>
					<p className='useful__links'>
						<i className='mr-2 fal fa-link'></i>
						<a href={link_url} target='__blank'>
							{link_type}
						</a>
					</p>
				</div>

				<p className='desc'>{description}</p>
			</div>
		</div>
	);
}

export default ProjectCard;
