<template>
  <div class="contact_info border-bottom border-top pt-4">
    <div class="info_item">
      <i class="fal fa-home-lg-alt"></i>
      <h6>KR 4105, BITS PILANI</h6>
      <p>Vidya Vihar Campus, Pilani, Rajasthan 333031</p>
    </div>
    <div class="info_item">
      <i class="fal fa-phone-alt"></i>
      <h6>
        <a href="tel:+919366496119">(+91) 93664 96119</a>
      </h6>
      <p>Mobile (Personal)</p>
    </div>
    <div class="info_item">
      <i class="fal fa-envelope"></i>
      <h6>
        <a href="mailto:nilanjan172nsvian@gmail.com"
          >nilanjan172nsvian@gmail.com</a
        >
      </h6>
      <p>Personal Email</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-contact-info"
};
</script>

<style lang="scss">
.contact_info {
  margin-top: 13px;
  .info_item {
    position: relative;
    padding-left: 45px;
    i {
      position: absolute;
      left: 0;
      top: 0;
      font-size: 20px;
      line-height: 24px;
      @include gradient(90deg, $primary-color 0%, $primary-color2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 500;
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
      font-size: 15px;
      line-height: 24px;
      padding: 2px 0px;
    }
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 0;
    .info_item {
      p {
        font-size: 12.5px;
        line-height: 20px;
      }
    }
  }
}
</style>
