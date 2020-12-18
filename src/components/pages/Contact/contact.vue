<template>
	<fragment>
		<section class="contact_brand_area" id="contact">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8 text-center">
						<div class="main_title">
							<h2>Contact Me</h2>
							<p>
								If you have any questions, please feel free to drop me a line.
								If you don't get an answer immediately, I might just be
								travelling through the middle of nowhere. I'll get back to you
								as soon as I can. That's a promise!
							</p>
						</div>
					</div>
				</div>
				<section class="contact_area">
					<div class="container">
						<div class="row form-container">
							<div class="col-lg-7 col-sm-12">
								<contact-form />
							</div>
							<div class="col-lg-5 col-sm-12">
								<hr class="mb-4" />
								<contact-info />
								<hr class="mb-4" />
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	</fragment>
</template>

<script>
import Form from './form';
import ContactInfo from './info';
import { Fragment } from 'vue-fragment';
export default {
	name: 'my-contact',
	components: {
		'contact-form': Form,
		'contact-info': ContactInfo,
		Fragment,
	},
};
</script>

<style lang="scss">
@import '../../utils/scss/_variable.scss';
@import '../../utils/scss/_mixins.scss';
@import '../../utils/scss/_predefine.scss';
@import '../../utils/scss/_banner.scss';
.contact_brand_area {
	.main_title {
		p {
			font-size: 13pt;
		}
		h2 {
			margin-bottom: 15px;
		}
		margin-bottom: 50px;
	}
	@media (max-width: 1199px) {
		padding-bottom: 50px;
	}
	@media (max-width: 600px) {
		.main_title {
			p {
				font-size: 11.5pt;
			}
			margin: 20px 0;
		}
	}
}
.form-container {
	@media screen and (max-width: 600px) {
		flex-direction: column-reverse;
	}
}
.contact_info {
	.info_item {
		position: relative;
		padding-left: 45px;
		i {
			position: absolute;
			left: 0;
			top: 0;
			font-size: 20px;
			line-height: 24px;
			@extend .gradient-color;
			font-weight: 600;
		}
		h6 {
			font-size: 16px;
			line-height: 24px;
			color: $primary-font;
			font-weight: bold;
			margin-bottom: 0px;
			color: $title-color;
			a {
				color: $title-color;
			}
		}
		p {
			font-size: 15px;
			line-height: 24px;
			padding: 2px 0px;
		}
	}
	@media screen and (max-width: 600px) {
		margin-bottom: 0;
		.info_item {
			p {
				font-size: 12.5px;
				line-height: 20px;
			}
		}
	}
}
.contact_form {
	.form-group {
		margin-bottom: 15px;
		.is-invalid {
			border-color: #dc3545 !important;
		}
		.form-control {
			font-size: 14px;
			line-height: 26px;
			color: rgb(46, 45, 45);
			border: 1px solid #ebe7e7;
			font-family: $title-font;
			border-radius: 0px;
			padding-left: 20px;
			&:focus {
				box-shadow: none;
				outline: none;
			}
			@include placeholder {
				color: rgb(143, 140, 140);
				font-family: $title-font;
			}
		}
		textarea {
			resize: none;
			&.form-control {
				min-height: 145px;
				height: auto;
				font-family: $title-font;
			}
			&.is-invalid {
				border-color: #dc3545 !important;
			}
		}
	}
	.primary_btn {
		margin-top: 5px;
	}
}
.modal-message {
	.modal-dialog {
		position: absolute;
		top: 36%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%) !important;
		margin: 0px;
		max-width: 500px;
		width: 100%;
		.modal-content {
			.modal-header {
				text-align: center;
				display: block;
				border-bottom: none;
				padding-top: 50px;
				padding-bottom: 50px;
				.close {
					position: absolute;
					right: -15px;
					top: -15px;
					padding: 0px;
					color: #fff;
					opacity: 1;
					cursor: pointer;
				}
				h2 {
					display: block;
					text-align: center;
					color: $primary-color;
					padding-bottom: 10px;
					font-family: $primary-font;
				}
				p {
					display: block;
				}
			}
		}
	}
}
</style>
