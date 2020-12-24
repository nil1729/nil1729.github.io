<template>
  <section class="brand_area" id="portfolio">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <div class="main_title">
            <h2>projects</h2>
            <p>
              As part of my Dev Journey, I built some personal projects along
              with learnings. I am also worked as a frontend developer with one
              of the major student body on campus. I started a blog site where I
              discuss about some algorithmic problems.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="skill_container">
            <my-project-card
              v-for="project in $store.state.projects.list"
              :project="project"
              :key="project.id"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projectCard from "./card";
export default {
  name: "my-projects",
  components: {
    "my-project-card": projectCard
  }
};
</script>

<style lang="scss" scoped>
.brand_area {
  padding-bottom: 50px;

  .main_title {
    margin-bottom: 55px;
    h2 {
      margin-bottom: 20px;
    }
    p {
      font-size: 13pt;
    }
  }
  @media (max-width: 1199px) {
    padding-bottom: 50px;
  }
  @media (max-width: 600px) {
    padding-bottom: 40px;
    margin-top: 3rem;
  }
  @media (max-width: 600px) {
    .main_title {
      p {
        font-size: 11.5pt;
        line-height: 23.5px;
      }
      margin: 20px 0 25px;
    }
  }
}
.skill_container {
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) and (min-width: 601px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    display: block;
    justify-content: center;
    .col-lg-4.col-md-4.col-sm-6 {
      width: auto;
    }
  }
}
</style>
