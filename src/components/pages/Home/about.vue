<template>
	<section class="about_area section_gap" id="about">
		<div class="container">
			<div class="row justify-content-start align-items-center">
				<div class="col-lg-5">
					<div class="about_img">
						<img class src="@/assets/banner/about.svg" alt />
					</div>
				</div>
				<div class="offset-lg-1 col-lg-5">
					<div class="main_title text-left">
						<h2>
							let’s
							<br />Introduce about <br />myself
						</h2>
						<p>
							I'm a Web developer experienced in Vue.js and Node.js. I love
							creating websites with new tech skills. I am a junior year student
							pursuing B.E. Computer Science from BITS Pilani, Rajasthan, India.
						</p>
						<p>
							I am a beginner on this Dev journey. But I am a fast learner; I
							started learning to code in August 2019. This year I joined the
							Student Union Technical Team of BITS Pilani as a Frontend
							Developer and learned about web development frameworks like
							ReactJS, VueJS, and NodeJS for backend development. Apart from Web
							Development, I love solving algorithmic problems on Leetcode,
							Codeforces and Hackerrank.
						</p>
						<a
							class="primary_btn"
							href="#"
							v-scroll-to="{
								el: '#get-started',
								duration: 600,
								easing: 'ease-in',
								offset: -60,
							}"
						>
							<span>get in touch</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about_area {
	position: relative;
	padding-top: 150px !important;
	@media (max-width: 1199px) {
		// padding-top: 80px;
		padding-top: 0px !important;
	}
	.main_title {
		margin-bottom: 0px;
		h2 {
			font-size: 28px;
			line-height: 36px;
		}
		p {
			margin-bottom: 20px;
			font-size: 13pt;
		}
	}
	.primary_btn {
		margin-top: 0px;
		@media (max-width: 600px) {
			position: relative;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.about_img {
		position: relative;
		right: 250px;
		@media (max-width: 1480px) {
			right: 0;
			img {
				max-width: 100%;
				height: auto;
			}
		}
		@media (max-width: 991px) {
			display: none;
		}
	}
}
</style>
