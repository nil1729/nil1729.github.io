<template>
  <form class="row contact_form" @submit.prevent="handleSubmit">
    <div class="col-md-6">
      <div class="form-group">
        <input
          required
          v-model="name"
          type="text"
          class="form-control"
          placeholder="Enter your Name"
        />
      </div>
      <div class="form-group">
        <input
          required
          v-model="email"
          type="email"
          class="form-control"
          placeholder="Enter Email Address"
        />
      </div>
      <div class="form-group">
        <input
          required
          v-model="subject"
          type="text"
          class="form-control"
          placeholder="Enter Subject"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <textarea
          required
          v-model="message"
          class="form-control"
          rows="1"
          placeholder="Enter Message"
        ></textarea>
      </div>
    </div>
    <div class="col-md-12 text-right">
      <button type="submit" value="submit" class="primary_btn">
        <span>Send Message</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "contact-form",
  data() {
    return {
      email: "",
      name: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.email, this.name, this.subject, this.message);
      this.reset();
    },
    reset() {
      this.email = "";
      this.name = "";
      this.subject = "";
      this.message = "";
    },
  },
};
</script>

<style>
</style>