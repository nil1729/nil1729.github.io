<template>
  <fragment>
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>Let's Connect</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="contact_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h3>Contact Me</h3>
            <hr class="mb-4" />
            <contact-info />
          </div>
          <div class="col-lg-2"></div>
          <div class="col-lg-5">
            <h3>Profiles</h3>
            <hr class="mb-4" />
            <contact-profiles />
          </div>
        </div>
        <div class="row form-container">
          <div class="col-lg-12">
            <contact-form />
          </div>
        </div>
      </div>
    </section>
  </fragment>
</template>

<script>
import Form from "./form";
import ContactInfo from "./info";
import ContactProfile from "./profiles";
import { Fragment } from "vue-fragment";
export default {
  name: "my-contact",
  components: {
    "contact-form": Form,
    "contact-info": ContactInfo,
    "contact-profiles": ContactProfile,
    Fragment,
  },
};
</script>

<style lang="scss">
@import "../../utils/scss/_variable.scss";
@import "../../utils/scss/_mixins.scss";
@import "../../utils/scss/_predefine.scss";
@import "../../utils/scss/_banner.scss";
// @import "../../utils/scss/_reset.scss";
.form-container {
  margin-top: 3rem;
  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
}
.contact_area {
  @media screen and (max-width: 600px) {
    margin-top: 2rem;
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
      font-size: 14px;
      line-height: 24px;
      padding: 2px 0px;
    }
  }
}
.contact_form {
  .form-group {
    margin-bottom: 10px;
    .is-invalid {
      border-color: #dc3545 !important;
    }
    .form-control {
      font-size: 13px;
      line-height: 26px;
      color: rgb(46, 45, 45);
      border: 1px solid #eeeeee;
      font-family: $title-font;
      border-radius: 0px;
      padding-left: 20px;
      &:focus {
        box-shadow: none;
        outline: none;
      }
      @include placeholder {
        color: #999;
        font-family: $title-font;
      }
    }
    textarea {
      resize: none;
      &.form-control {
        min-height: 134px;
        height: auto;
        font-family: $title-font;
      }
      &.is-invalid {
        border-color: #dc3545 !important;
      }
    }
  }
  .primary_btn {
    margin-top: 20px;
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
