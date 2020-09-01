<template>
  <fragment>
    <app-navbar />
    <router-view />
    <app-footer />
  </fragment>
</template>

<script>
import Navbar from "./components/layouts/Navbar";
import { Fragment } from "vue-fragment";
import Footer from "./components/layouts/footer";
export default {
  name: "App",
  components: {
    "app-navbar": Navbar,
    "app-footer": Footer,
    Fragment,
  },
};
</script>

<style lang='scss'>
/* Customize website's scrollbar like Mac OS
Not supports in Firefox and IE */

/* total width */
::-webkit-scrollbar {
  background-color: #fff;
  width: 16px;
}

/* background of the scrollbar except button or resizer */
::-webkit-scrollbar-track {
  background-color: #fff;
}
::-webkit-scrollbar-track:hover {
  background-color: #f4f4f4;
}

/* scrollbar itself */
::-webkit-scrollbar-thumb {
  background-color: #babac0;
  border-radius: 16px;
  border: 5px solid #fff;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #a0a0a5;
  border: 4px solid #f4f4f4;
}

/* set button(top and bottom of the scrollbar) */
::-webkit-scrollbar-button {
  display: none;
}
</style>
