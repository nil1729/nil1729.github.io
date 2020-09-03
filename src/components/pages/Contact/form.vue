<template>
  <fragment>
    <form
      v-if="!submitted"
      class="row contact_form"
      @submit.prevent="handleSubmit"
    >
      <div class="col-md-6">
        <div class="form-group">
          <input
            required
            v-model="name"
            type="text"
            class="form-control"
            placeholder="Enter your Name"
            :class="{ 'is-invalid': nameValid === false }"
          />
          <div class="feedback" :class="{ show: nameValid === false }">
            Please enter a valid Name
          </div>
        </div>
        <div class="form-group">
          <input
            required
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Email Address"
            :class="{ 'is-invalid': emailValid === false }"
          />
          <div class="feedback" :class="{ show: emailValid === false }">
            Please enter a valid Email Address
          </div>
        </div>
        <div class="form-group">
          <input
            required
            v-model="subject"
            type="text"
            class="form-control"
            placeholder="Subject"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <textarea
            required
            v-model="message"
            class="form-control"
            rows="7"
            placeholder="Your Message"
          ></textarea>
        </div>
      </div>
      <div class="col-md-12 text-right">
        <button
          type="submit"
          value="submit"
          class="primary_btn"
          :class="{ 'loading-disabled': loading }"
        >
          <span>{{ !loading ? "Send Message" : "loading ..." }}</span>
        </button>
      </div>
    </form>
    <div v-else class="mt-3 banner_content text-center success-msg">
      <h5 class="text-uppercase">Message sent</h5>
      <h1 class="text-uppercase">Thank You</h1>
      <a
        @click.prevent="submitted = false"
        class="primary_btn tr-bg mt-2"
        href="#"
      >
        <span>Send another Message</span>
      </a>
    </div>
  </fragment>
</template>

<script>
import validator from "validator";
import { Fragment } from "vue-fragment";
export default {
  name: "contact-form",
  components: {
    Fragment,
  },
  data() {
    return {
      email: "",
      name: "",
      subject: "",
      message: "",
      emailValid: null,
      nameValid: null,
      loading: false,
      submitted: false,
    };
  },
  watch: {
    email() {
      if (this.email != "") {
        this.emailValid = validator.isEmail(this.email);
      }
    },
    name() {
      this.nameValid = validator.matches(this.name, /^[a-zA-Z ]*$/);
    },
  },
  methods: {
    async handleSubmit() {
      if (!this.doubleCheck()) {
        return;
      }
      this.loading = true;
      await this.sendFormData();
      this.loading = false;
      this.submitted = true;
    },
    doubleCheck() {
      return (
        validator.isEmail(this.email) &&
        validator.matches(this.name, /^[a-zA-Z ]*$/) &&
        this.subject.trim().length !== 0 &&
        this.message.trim().length !== 0
      );
    },
    reset() {
      this.emailValid = null;
      this.email = "";
      this.name = "";
      this.subject = "";
      this.message = "";
      this.nameValid = null;
    },
    async sendFormData() {
      const myHeaders = new Headers();
      const formdata = new FormData();
      formdata.append("Name", this.name);
      formdata.append("Email Adresss", this.email);
      formdata.append("Subject", validator.ltrim(this.subject));
      formdata.append("Message", validator.ltrim(this.message));
      this.reset();
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };
      try {
        await fetch(
          "https://cors-anywhere.herokuapp.com/https://formspree.io/xrgyajyn",
          requestOptions
        );
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../utils/scss/_variable.scss";
.feedback {
  opacity: 0;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
  &.show {
    opacity: 1 !important;
  }
}
.success-msg {
  h1 {
    color: $primary-color2;
  }
  h5 {
    color: $primary-color;
  }
  .primary_btn {
    line-height: 35px !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    span {
      padding: 0 10px !important;
      letter-spacing: 0.4px;
    }
  }
}
.loading-disabled {
  pointer-events: none !important;
}
</style>
