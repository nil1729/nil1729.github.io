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
                <a
                  class="primary_btn tr-bg"
                  href="https://drive.google.com/file/d/15y93XgDpnmaTjtboCCmaguRemAr3tBHu/view"
                  target="_blank"
                >
                  <span>My resume</span>
                </a>
                <a
                  class="primary_btn tr-bg"
                  href="#portfolio"
                  v-scroll-to="{
                    el: '#portfolio',
                    duration: 600,
                    easing: 'ease-in',
                    offset: -100
                  }"
                >
                  <span>My portfolio</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="home_right_img">
              <img class src="~/assets/banner/dev.svg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "my-intro"
};
</script>

<style lang="scss">
.home_banner_area {
  z-index: 1;
  background: url("~assets/backgrounds/overlay.svg") no-repeat right center;
  background-position: right;
  background-size: contain;
  @media screen and (max-width: 800px) {
    background: transparent;
  }
  .banner_inner {
    width: 100%;
    .home_right_img {
      padding-top: 150px;
      img {
        width: 100%;
        height: auto;
      }
      @media (max-width: 991px) {
        // display: none;
        padding-top: 0;
      }
    }
    .col-lg-7 {
      vertical-align: middle;
      align-self: center;
    }
    .banner_content {
      text-align: left;
      @media (max-width: 991px) {
        // margin-top: 150px;
      }
      h3 {
        font-size: 40px;
        margin-bottom: 20px;
        position: relative;
        @media screen and (max-width: 600px) {
          margin-bottom: 0;
        }
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
        @media (max-width: 767px) {
          font-size: 40px;
          margin: 0 0 10px;
        }
      }
      h5 {
        font-size: 24px;
        margin-bottom: 35px;
        @media (max-width: 600px) {
          font-size: 23px;
        }
      }
      .primary_btn {
        margin-right: 20px;
      }
    }
  }
}
</style>
