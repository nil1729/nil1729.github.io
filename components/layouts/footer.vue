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
            <div
              class="footer_social d-flex justify-content-center align-items-center"
            >
              <a
                href="https://github.com/nil1729"
                target="_blank"
                rel="noopener"
              >
                <span class="sr-only">Github</span>
                <img src="~/assets/icons/github.svg" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/nilanjan-deb/"
                target="_blank"
                rel="noopener"
              >
                <span class="sr-only">Linkedin</span>
                <img src="~/assets/icons/linkedin.svg" alt="" />
              </a>
              <a
                href="https://twitter.com/_nilanjandeb"
                target="_blank"
                rel="noopener"
              >
                <span class="sr-only">Twitter</span>
                <img src="~/assets/icons/twitter.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="credit_footer text-right">
      <h5 class="col-lg-8 col-sm-12 ml-auto mr-5 lead mt-2">
        Template by
        <a href="https://colorlib.com/" target="_blank" rel="noopener"
          >Colorlib</a
        >
      </h5>
    </div>
  </footer>
</template>

<script>
export default {
  name: "my-footer"
};
</script>

<style lang="scss">
.blog_version {
  .footer_area {
    background: #ffffff;
    &:before {
      content: none;
    }
  }
}
.footer_area {
  background: url(~assets/backgrounds/credit.svg) no-repeat center;
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
    background: #ffffff;
    z-index: -1;
  }
  @media (max-width: 1024px) {
    padding: 60px 0;
  }
  @media (max-width: 600px) {
    padding-top: 80px !important;
    padding-bottom: 30px !important;
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
    margin: 20px 0px 30px;
    a {
      padding: 0 20px;
      img {
        width: 26px;
        height: 100%;
        @media screen and(max-width: 576px) {
          width: 25px;
        }
      }
    }
    @media screen and(max-width: 576px) {
      margin-top: 15px;
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
    @media (max-width: 600px) {
      display: none;
    }
    // background: url(../../assets/backgrounds/credit.svg) no-repeat center;
  }
}
</style>
