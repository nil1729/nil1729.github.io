<template>
  <section class="home_banner_area">
    <div class="banner_inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="banner_content">
              <h3 class="text-uppercase">Hell0</h3>
              <h1 class="text-uppercase">I am Nilanjan</h1>
              <h5 class="text-uppercase">
                Web Developer • Undergradute Student
              </h5>
              <div class="d-flex align-items-center">
                <a class="primary_btn tr-bg" href="#">
                  <span>My Portfolio</span>
                </a>
                <a
                  class="primary_btn tr-bg"
                  href="#"
                  v-scroll-to="{
                    el: '#get-started',
                    duration: 600,
                    easing: 'ease-in',
                    offset: -60,
                  }"
                >
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="home_right_img">
              <img class src="@/assets/banner/dev.png" alt />
            </div>
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
@import "../../utils/scss/_variable.scss";
// @import "../../utils/scss/_mixins.scss";
// @import "../../utils/scss/_predefine.scss";
// @import "../../utils/scss/_reset.scss";
.home_banner_area {
  z-index: 1;
  background: url("../../../assets/backgrounds/home.png") no-repeat top center;
  background-position: center;
  background-size: cover;
  .banner_inner {
    width: 100%;
    .home_right_img {
      padding-top: 150px;
      @media (max-width: 1480px) {
        img {
          max-width: 100%;
          height: auto;
        }
      }
      @media (max-width: 991px) {
        display: none;
      }
    }
    .col-lg-7 {
      vertical-align: middle;
      align-self: center;
    }
    .banner_content {
      text-align: left;
      @media (max-width: 991px) {
        margin-top: 150px;
      }
      h3 {
        font-size: 40px;
        margin-bottom: 20px;
        position: relative;
        &:after {
          content: "";
          width: 410px;
          height: 2px;
          position: absolute;
          top: 50%;
          left: 23%;
          background: $title-color;
          @media (max-width: 575px) {
            display: none;
          }
        }
      }
      h1 {
        margin-top: 20px;
        font-size: 70px;
        line-height: 60px;
        margin-bottom: 25px;
        @media (max-width: 1024px) {
          font-size: 60px;
        }
        @media (max-width: 767px) {
          font-size: 50px;
        }
      }
      h5 {
        font-size: 24px;
        margin-bottom: 35px;
      }
      .primary_btn {
        margin-right: 20px;
      }
    }
  }
}
</style>
