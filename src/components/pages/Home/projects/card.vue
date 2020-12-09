<template>
	<div class="card__container">
		<div class="main__content">
			<h5 class="title__card">
				{{ project.name }}
			</h5>
			<h6 class="short__desc">
				{{ project.shortDescription }}
			</h6>
			<div class="short__info">
				<p class="date__duration">
					<i class="mr-2 fal fa-calendar-day"></i> {{ project.date }}
				</p>
				<p class="useful__links">
					<i class="mr-2 fal fa-link"></i
					><a :href="project.link" target="__blank">{{ project.linkType }}</a>
				</p>
			</div>

			<p class="desc">
				{{ project.description }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Project-Card',
	props: ['project'],
};
</script>

<style lang="scss">
.card__container {
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 6px 0px;

	.main__content {
		padding: 1rem;
		background: rgb(255, 255, 255);
		height: 100%;

		.title__card {
			color: rgb(33, 33, 33);
			margin-bottom: 5px;
			padding-bottom: 0px;
		}

		.short__desc {
			color: rgb(33, 33, 33);
			padding-bottom: 0px;
			font-weight: 400;
			margin-bottom: 10px !important;
		}

		.short__info {
			margin-bottom: 10px;
			p {
				margin-bottom: 0;
				color: rgb(0, 0, 0);
			}
		}
		.desc {
			color: rgb(112, 112, 112);
			font-weight: 400;
			margin-bottom: 1rem;
			line-height: 22px;
			font-size: 16px;
		}
	}
	@media screen and (max-width: 600px) {
		margin-bottom: 1.2rem;
	}
}
</style>
