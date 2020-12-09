<template>
	<section class="brand_area" id="portfolio">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 text-center">
					<div class="main_title">
						<h2>projects</h2>
						<p>
							Is give may shall likeness made yielding spirit a itself togeth
							created after sea
							<br />is in beast beginning signs open god you're gathering ithe
						</p>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-12">
					<div class="skill_container">
						<my-project-card v-for="i in 10" :key="i" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import projectCard from './card';
export default {
	name: 'skill-set',
	components: {
		'my-project-card': projectCard,
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
@import '../../../utils/scss/_mixins.scss';
@import '../../../utils/scss/_variable.scss';
@import '../../../utils/scss/_predefine.scss';
.brand_area {
	padding-bottom: 100px;
	@media (max-width: 1199px) {
		padding-bottom: 50px;
	}
	@media (max-width: 600px) {
		padding-bottom: 0px;
		margin-top: 3rem;
	}
	.main_title {
		margin-bottom: 50px;
	}
}
.skill_container {
	display: grid;
	-webkit-box-align: center;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 8fr;
	gap: 1.2rem;
	margin-bottom: 2rem;
	@media screen and (max-width: 600px) {
		display: block;
		justify-content: center;
		.col-lg-4.col-md-4.col-sm-6 {
			width: auto;
		}
	}
}
</style>
