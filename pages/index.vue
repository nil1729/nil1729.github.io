<template>
  <fragment>
    <my-intro />
    <my-about />
    <my-skill />
    <my-projects />
    <my-contact />
  </fragment>
</template>

<script>
import intro from "~/components/pages/Home/intro";
import about from "~/components/pages/Home/about";
import skills from "~/components/pages/Home/skill";
import projects from "~/components/pages/Home/projects/index";
import contacts from "~/components/pages/Contact/contact";
import { Fragment } from "vue-fragment";

export default {
  name: "my-portfolio",
  components: {
    "my-intro": intro,
    "my-about": about,
    "my-skill": skills,
    "my-contact": contacts,
    "my-projects": projects,
    Fragment
  }
};
</script>
