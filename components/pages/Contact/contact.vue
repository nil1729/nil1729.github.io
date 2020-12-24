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
                <contact-info />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </fragment>
</template>

<script>
import Form from "./form";
import ContactInfo from "./info";
import { Fragment } from "vue-fragment";
export default {
  name: "my-contact",
  components: {
    "contact-form": Form,
    "contact-info": ContactInfo,
    Fragment
  }
};
</script>

<style lang="scss">
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

.contact_form {
  .form-group {
    margin-bottom: 20px;
    .is-invalid {
      border-color: #dc3545 !important;
    }
    label {
      color: $text-color;
      margin-bottom: 2px;
      padding-left: 5px;
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
    .invalid-feedback {
      font-size: 95%;
      padding-left: 2px;
    }
  }
  .primary_btn {
    margin-top: 5px;
  }
}
</style>
