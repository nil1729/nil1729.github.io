import { Fragment } from 'react';
import Intro from '../components/sections/intro';
import About from '../components/sections/about';
import Projects from '../components/sections/project';
import Skill from '../components/sections/skill';
import Contact from '../components/sections/contact';
import PROJECT_ITEMS from '../_data/projects';
import fs from 'fs';
import path from 'path';

function Home(props) {
	return (
		<Fragment>
			<Intro />
			<About />
			<Projects project_items={props.project_items} />
			<Skill technical_skill_icons={props.technical_skill_icons} />
			<Contact />
		</Fragment>
	);
}

export async function getStaticProps() {
	const file_path = path.join(process.cwd(), 'public', 'assets', 'skills');
	const icon_array = fs.readdirSync(file_path);

	return {
		props: {
			project_items: PROJECT_ITEMS,
			technical_skill_icons: icon_array,
		},
	};
}

export default Home;
