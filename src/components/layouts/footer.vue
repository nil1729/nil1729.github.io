<template>
  <footer class="footer_area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="footer_top flex-column">
            <div class="footer_logo">
              <h5>
                <span class="fa fa-code"></span> with
                <span class="fa fa-heart"></span> and
                <span class="fa fa-coffee"></span>
              </h5>
              <h4>Nilanjan Deb</h4>
            </div>
            <div class="footer_social">
              <a href="https://github.com/nil1729" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nilanjan-deb/"
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com/NilanjanDeb9" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <!-- <a href="#">
                <i class="fab fa-medium"></i>
              </a>-->
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="row footer_bottom justify-content-center">
        <p class="col-lg-8 col-sm-12 footer-text">
          Copyright &copy; 2020
          All rights reserved | This template is made with
          <i
            class="fa fa-heart-o"
            aria-hidden="true"
          ></i>
          by
          <a href="https://colorlib.com" target="_blank">Colorlib</a>
        </p>
      </div>-->
    </div>
    <div class="credit_footer text-right">
      <h5 class="col-lg-8 col-sm-12 ml-auto mr-5 lead mt-2">
        Template by
        <a href="https://colorlib.com/" target="_blank">Colorlib</a>
      </h5>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../utils/scss/_variable.scss";
@import "../utils/scss/_mixins.scss";
@import "../utils/scss/_predefine.scss";
.blog_version {
  .footer_area {
    background: #f9f9fd;
    &:before {
      content: none;
    }
  }
}
.footer_area {
  background: url(../../assets/backgrounds/credit.svg) no-repeat center;
  padding: 120px 0 50px;
  background-size: cover;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: -200px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #f9f9fd;
    z-index: -1;
  }
  @media (max-width: 1024px) {
    padding: 60px 0;
  }
  .footer_logo {
    text-align: center;
    h5 {
      font-weight: 400;
      font-size: initial;
      color: $title-color;
      .fa-coffee {
        color: #8b6910;
      }
      .fa-heart {
        color: rgb(241, 30, 30);
      }
    }
    h4 {
      font-size: 20px;
      color: #000000;
      margin-top: 16px;
      text-transform: uppercase;
    }
  }
  .footer_social {
    text-align: center;
    margin: 25px 0px 30px;
    a {
      padding: 0 20px;
      i {
        color: #788489;
        font-size: 27px;
        @include transition();
        @media (max-width: 576px) {
          font-size: 25px;
        }
        &:hover {
          color: #6c63ff;
        }
      }
    }
  }

  .footer_bottom {
    text-align: center;
    p {
      margin-bottom: 0;
    }
    a {
      color: $primary-color2;
    }
  }
  .credit_footer {
    h5 {
      a {
        color: #854fee;
      }
    }
    // background: url(../../assets/backgrounds/credit.svg) no-repeat center;
  }
}
</style>
