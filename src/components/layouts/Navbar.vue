<template>
  <header class="header_area">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display
          <a class="navbar-brand logo_h" href="index.html">
            <img src="img/logo.png" alt />
          </a>-->
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav justify-content-end">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="services.html">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="portfolio.html">Portfolio</a>
              </li>
              <li class="nav-item submenu dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Pages</a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="elements.html">Elements</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="portfolio-details.html">Portfolio Details</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item submenu dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Blog</a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="blog.html">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="single-blog.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../utils/scss/_variable.scss";
@import "../utils/scss/_mixins.scss";
@import "../utils/scss/_predefine.scss";
@import "../utils/scss/_reset.scss";
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
        &:hover,
        &.active {
          .nav-link {
            color: $primary-color;
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
              content: "";
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