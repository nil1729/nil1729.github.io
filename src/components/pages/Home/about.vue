<template>
  <section class="about_area section_gap" id="about">
    <div class="container">
      <div class="row justify-content-start align-items-center">
        <div class="col-lg-5">
          <div class="about_img">
            <img class src="@/assets/banner/about.svg" alt />
          </div>
        </div>
        <div class="offset-lg-1 col-lg-5">
          <div class="main_title text-left">
            <h2>
              let’s
              <br />Introduce about
              <br />myself
            </h2>
            <p>
              Whose given. Were gathered. There first subdue greater. Bearing
              you Whales heaven midst their. Beast creepeth. Fish days.
            </p>
            <p>
              Is give may shall likeness made yielding spirit a itself
              together created after sea is in beast beginning signs open god
              you're gathering whose gathered cattle let. Creature whales
              fruit unto meat the life beginning all in under give two.
            </p>
            <a class="primary_btn" href="#">
              <span>My Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.about_area {
  position: relative;
  padding-top: 150px !important;
  @media (max-width: 1199px) {
    // padding-top: 80px;
    padding-top: 0px !important;
  }
  .main_title {
    margin-bottom: 0px;
    p {
      margin-bottom: 20px;
    }
  }
  .primary_btn {
    margin-top: 20px;
    @media (max-width: 600px) {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .about_img {
    position: relative;
    right: 250px;
    @media (max-width: 1480px) {
      right: 0;
      img {
        max-width: 100%;
        height: auto;
      }
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
}
</style>