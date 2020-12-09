<template>
	<header
		id="header-top"
		ref="header_navbar"
		class="header_area"
		:class="{ navbar_fixed }"
	>
		<div class="main_menu">
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container">
					<!-- Brand and toggle get grouped for better mobile display -->
					<span @click="navigate('top')" class="navbar-brand logo_h">
						Nilanjan Deb
						<!-- <img src="img/logo.png" alt /> -->
					</span>
					<button
						class="navbar-toggler"
						type="button"
						:class="{ collapsed: !navbar_open }"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						@click="navbarExapnd"
						id="navbar-toggler"
						ref="navbar-toggler"
					>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<!-- Collect the nav links, forms, and other content for toggling -->
					<transition name="slide-fade">
						<div
							v-if="navbar_open"
							class="navbar-collapse offset collapse"
							:class="{ show: navbar_open }"
							id="navbarSupportedContent"
						>
							<ul class="nav navbar-nav menu_nav justify-content-end">
								<router-link
									:to="{ name: 'Home', hash: '#about' }"
									exact
									tag="li"
									active-class="active"
									class="nav-item"
								>
									<a
										class="nav-link"
										href="#"
										v-scroll-to="{
											el: '#about',
											duration: 600,
											easing: 'ease-in',
											offset: 65,
										}"
										>About</a
									>
								</router-link>
								<router-link
									:to="{ name: 'Home', hash: '#portfolio' }"
									exact
									tag="li"
									active-class="active"
									class="nav-item"
								>
									<a
										class="nav-link"
										href="#"
										v-scroll-to="{
											el: '#portfolio',
											duration: 600,
											easing: 'ease-in',
											offset: -100,
										}"
										>Portfolio</a
									>
								</router-link>
								<li class="nav-item submenu dropdown">
									<a
										href="#"
										class="nav-link"
										data-toggle="dropdown"
										role="button"
										aria-haspopup="true"
										aria-expanded="false"
										>Blogs</a
									>
								</li>
								<router-link
									tag="li"
									to="/contact"
									active-class="active"
									class="nav-item"
								>
									<a class="nav-link">Contact me</a>
								</router-link>
							</ul>
						</div>
					</transition>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
import { scroller } from 'vue-scrollto/src/scrollTo';
export default {
	name: 'Navbar',
	data() {
		return {
			navbar_fixed: false,
			navbar_open: window.innerWidth < 800 ? false : true,
		};
	},
	watch: {
		$route() {
			if (window.innerWidth < 800) {
				if (this.navbar_open) {
					this.navbarExapnd();
				}
			}
		},
	},
	created() {
		const vm = this;
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', function() {
			if (window.innerWidth < 800) {
				vm.navbar_open = false;
			} else {
				vm.navbar_open = true;
			}
		});
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		navbarExapnd() {
			this.navbar_open = !this.navbar_open;
			this.$refs['navbar-toggler'].setAttribute(
				'aria-expanded',
				this.navbar_open
			);
		},
		handleScroll() {
			if (this.$refs.header_navbar.getBoundingClientRect().top < -100) {
				this.navbar_fixed = true;
			} else {
				this.navbar_fixed = false;
			}
		},
		navigate(pointer) {
			const ScrollToTop = scroller();
			if (pointer === 'top' && this.$route.name === 'Home') {
				ScrollToTop({
					el: '#header-top',
					duration: 600,
					easing: 'ease-in',
					offset: -60,
				});
				if (this.$route.hash) {
					this.$router.push({ name: 'Home', hash: '' });
				}
			} else if (pointer === 'top') {
				this.$router.push({ name: 'Home' });
			}
		},
	},
};
</script>

<style lang="scss">
@import '../utils/scss/_variable.scss';
@import '../utils/scss/_mixins.scss';
@import '../utils/scss/_predefine.scss';
@import '../utils/scss/_reset.scss';
// Transitions
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.3s ease-in;
}
.slide-fade-enter {
	height: 0px;
	opacity: 0.3;
}
.slide-fade-enter-to {
	height: 165px;
	opacity: 1;
}
.slide-fade-leave {
	height: 165px;
	opacity: 1;
}
.slide-fade-leave-to {
	height: 0px;
	opacity: 0;
}

//header_area css
.header_area {
	position: absolute;
	width: 100%;
	z-index: 9999;
	background: #ffffff;
	.menu_nav {
		width: 100%;
	}
	.navbar {
		background: transparent;
		padding: 0px;
		border: 0px;
		border-radius: 0px;
		width: 100%;
		.navbar-brand {
			font-family: $title-font;
			font-weight: 400;
			font-size: 20px;
			cursor: pointer;

			@media screen and (max-width: 600px) {
				font-weight: 300;
				color: #fff;
			}
		}
		.nav {
			.nav-item {
				margin-right: 45px;
				.nav-link {
					font: 500 14px/100px $title-font;
					text-transform: uppercase;
					color: $title-color;
					padding: 0px;
					display: inline-block;
					&:after {
						display: none;
					}
				}
				&.active {
					pointer-events: none;
				}
				&:hover,
				&.active {
					.nav-link {
						color: $primary-color !important;
					}
				}
				&.submenu {
					position: relative;
					ul {
						border: none;
						padding: 0px;
						border-radius: 0px;
						box-shadow: none;
						margin: 0px;
						background: #fff;
						@media (min-width: 992px) {
							position: absolute;
							top: 120%;
							left: 0px;
							min-width: 200px;
							text-align: left;
							opacity: 0;
							transition: all 300ms ease-in;
							visibility: hidden;
							display: block;
							border: none;
							padding: 0px;
							border-radius: 0px;
							box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
						}
						&:before {
							content: '';
							width: 0;
							height: 0;
							border-style: solid;
							border-width: 10px 10px 0 10px;
							border-color: #eeeeee transparent transparent transparent;
							position: absolute;
							right: 24px;
							top: 45px;
							z-index: 3;
							opacity: 0;
							transition: all 400ms linear;
						}
						.nav-item {
							display: block;
							float: none;
							margin-right: 0px;
							border-bottom: 1px solid #ededed;
							margin-left: 0px;
							transition: all 0.4s linear;
							.nav-link {
								line-height: 45px;
								color: $title-color;
								padding: 0px 30px;
								transition: all 150ms linear;
								display: block;
								text-transform: capitalize;
								margin-right: 0px;
							}
							&:last-child {
								border-bottom: none;
							}
							&:hover {
								.nav-link {
									@extend .gradient-bg;
									color: #fff;
								}
							}
						}
					}
					&:hover {
						ul {
							@media (min-width: 992px) {
								visibility: visible;
								opacity: 1;
								top: 100%;
							}
							.nav-item {
								margin-top: 0px;
							}
						}
					}
				}
				&:last-child {
					margin-right: 0px;
				}
			}
		}
	}
	&.navbar_fixed {
		.main_menu {
			position: fixed;
			width: 100%;
			top: -70px;
			left: 0;
			right: 0;
			background: #ffffff;
			transform: translateY(70px);
			transition: transform 500ms ease, background 500ms ease;
			-webkit-transition: transform 500ms ease, background 500ms ease;
			box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
			.navbar {
				.nav {
					.nav-item {
						.nav-link {
							line-height: 70px;
						}
					}
				}
			}
		}
	}
	&.white_menu {
		.navbar {
			.navbar-brand {
				@media (min-width: 992px) {
					img {
						display: none;
						& + img {
							display: inline-block;
						}
					}
				}
				@media (max-width: 991px) {
					img {
						display: inline-block;
						& + img {
							display: none;
						}
					}
				}
			}
			.nav {
				.nav-item {
					.nav-link {
						color: #fff;
					}
				}
			}
		}
		&.navbar_fixed {
			.main_menu {
				.navbar {
					.navbar-brand {
						img {
							display: inline-block;
							& + img {
								display: none;
							}
						}
					}
					.nav {
						.nav-item {
							.nav-link {
								line-height: 70px;
								color: $title-color;
							}
						}
					}
				}
			}
		}
	}
}

.owl-carousel.off {
	display: -ms-flexbox;
	display: flex;
}
</style>
