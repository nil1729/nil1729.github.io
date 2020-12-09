<template>
	<fragment>
		<my-intro />
		<my-about />
		<my-skill />
		<my-projects />
		<my-newsletter />
	</fragment>
</template>

<script>
import intro from './intro';
import about from './about';
import skills from './skill';
import newsletter from './newsletter';
import projects from './projects/index';
import { Fragment } from 'vue-fragment';
export default {
	components: {
		'my-intro': intro,
		'my-about': about,
		'my-skill': skills,
		'my-newsletter': newsletter,
		'my-projects': projects,
		Fragment,
	},
};
</script>

<style></style>
