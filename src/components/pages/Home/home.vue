<template>
  <fragment>
    <my-intro />
    <my-about />
    <my-skill />
    <my-newsletter />
  </fragment>
</template>

<script>
import intro from "./intro";
import about from "./about";
import skills from "./skill";
import newsletter from "./newsletter";
import { Fragment } from "vue-fragment";
export default {
  components: {
    "my-intro": intro,
    "my-about": about,
    "my-skill": skills,
    "my-newsletter": newsletter,
    Fragment,
  },
};
</script>

<style>
</style>