<template>
	<section class="brand_area">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-9 text-center">
					<div class="main_title">
						<h2>technical skills</h2>
						<p>
							I started coding by learning about C programming and solving
							algorithmic problems.
							<br />After I began learning Frontend Development, I fell in love
							with Javascript. I have learned Frontend frameworks ReactJS and
							VueJS so far. Then I started learning about NodeJS and exploring
							backend development. Now I am exploring some cloud services
							platforms like Firebase (GCP).
						</p>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="row skill_container">
						<div v-for="i in 9" :key="i" class="col-lg-4 col-md-4 col-sm-6">
							<div class="single-brand-item d-table">
								<div class="d-table-cell text-center">
									<img :src="getImgUrl(i)" alt />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="offset-lg-2 col-lg-4 col-md-6">
					<div class="client-info">
						<div class="d-flex mb-50">
							<span class="lage">{{ experience }}+</span>
							<span class="smll">Years of Working Experience</span>
						</div>
						<div class="call-now d-flex">
							<div>
								<span class="fa fa-question-circle"></span>
							</div>
							<div class="ml-15">
								<p>Wanna know More ?</p>
								<h3>
									<router-link to="/contact">Let's Connect!</router-link>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'skill-set',
	data() {
		return {
			experience: new Date().getFullYear() - 2019,
		};
	},
	methods: {
		getImgUrl(index) {
			var images = require.context('@/assets/skills/', false, /\.png$/);
			return images('./' + index + '.png');
		},
	},
};
</script>

<style lang="scss">
@import '../../utils/scss/_mixins.scss';
@import '../../utils/scss/_variable.scss';
@import '../../utils/scss/_predefine.scss';
.brand_area {
	padding-bottom: 100px;
	@media (max-width: 1199px) {
		padding-bottom: 50px;
	}
	@media (max-width: 600px) {
		padding-bottom: 0px;
	}
	.main_title {
		p {
			font-size: 13pt;
		}
		h2 {
			margin-bottom: 5px;
		}
		margin-bottom: 65px;
	}
}
.skill_container {
	@media screen and (max-width: 600px) {
		justify-content: center;
		.col-lg-4.col-md-4.col-sm-6 {
			width: auto;
		}
	}
}

.single-brand-item {
	width: 170px;
	height: 100px;
	cursor: pointer;
	margin-bottom: 30px;
	border: 1px solid #eeeeee;
	box-shadow: none;
	@include transition();
	@media only screen and (max-width: 767px) {
		height: 100px;
		width: 140px;
	}
	@media (max-width: 575px) {
		margin: 0px auto;
		margin-bottom: 30px;
	}
	.d-table-cell {
		vertical-align: middle;
	}
	img {
		max-width: 80px;
		margin: 0 auto;
		@include transition();
		@media only screen and (max-width: 767px) {
			max-width: 100px;
		}
	}
	&:hover {
		border: 1px solid transparent;
		box-shadow: 0px 8px 30px rgba(118, 85, 225, 0.15);
	}
}
.client-info {
	padding: 25px 30px;
	background: #faf8ff;
	text-align: center;
	position: relative;
	margin-top: 25px;
	@media only screen and (max-width: 991px) {
		margin-top: 50px;
	}
	@media only screen and (max-width: 600px) {
		margin-top: 0px;
	}
	@media (max-width: 575px) {
		padding-top: 50px;
	}
	&:before {
		content: '';
		position: absolute;
		top: -25px;
		left: -50px;
		background: url(../../../assets/backgrounds/client-info-bg.png) no-repeat;
		height: 175px;
		width: 175px;
		@media (max-width: 575px) {
			background: none;
		}
	}
	.d-flex {
		@media (max-width: 575px) {
			-ms-flex-align: center;
			align-items: center;
		}
	}
	.lage {
		color: $primary-color2;
		font-family: $title-font;
		font-size: 100px;
		font-weight: 700;
		line-height: 85px;
		position: relative;
		z-index: 9;
	}
	.smll {
		text-align: left;
		color: $title-color;
		font-family: $title-font;
		font-size: 21px;
		margin-left: 20px;
	}
}
.call-now {
	padding-top: 50px;
	text-align: left;
	margin-bottom: 40px;
	@media (max-width: 575px) {
		padding-top: 0px;
	}
	h3 {
		a {
			color: $title-color;
		}
		@media (max-width: 480px) {
			font-size: 17px;
		}
	}
	p {
		color: $primary-color2;
		font-size: 16px;
		text-transform: uppercase;
		margin-bottom: 5px;
	}
	span {
		font-size: 60px;
		font-weight: 700;
		color: $title-color;
	}
}
</style>
