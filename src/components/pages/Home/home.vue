<template>
  <fragment>
    <my-intro />
    <my-about />
    <my-skill />
  </fragment>
</template>

<script>
import intro from "./intro";
import about from "./about";
import skills from "./skill";
import { Fragment } from "vue-fragment";
export default {
  components: {
    "my-intro": intro,
    "my-about": about,
    "my-skill": skills,
    Fragment,
  },
};
</script>

<style>
</style>