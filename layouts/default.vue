<template>
  <div>
    <app-navbar />
    <Nuxt />
    <app-footer />
    <div @click="goToTop" class="goto-top-btn" ref="goto-top-btn">
      <i class="fas fa-arrow-up"></i>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/layouts/Navbar";
import Footer from "~/components/layouts/footer";
export default {
  name: "my-app",
  components: {
    "app-navbar": Navbar,
    "app-footer": Footer
  },
  data() {
    return {
      // title: this.$store.state.seo.title,
    };
  },
  methods: {
    scrollFunction() {
      const gotoTopBtn = this.$refs["goto-top-btn"];
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        gotoTopBtn.style.display = "flex";
      } else {
        gotoTopBtn.style.display = "none";
      }
    },
    goToTop() {
      document.getElementById("header-top").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    }
  },
  created() {
    if (window.innerWidth > 1024) {
      window.onscroll = () => {
        this.scrollFunction();
      };
    }
  }
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  background-color: #efeefe;
  width: 16px;
}
::-webkit-scrollbar-track {
  background-color: #efeefe;
}
::-webkit-scrollbar-track:hover {
  background-color: #f4f4f4;
}
::-webkit-scrollbar-thumb {
  background-color: #babac0;
  border-radius: 16px;
  border: 5px solid #efeefe;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #a0a0a5;
  border: 4px solid #f4f4f4;
}

::-webkit-scrollbar-button {
  display: none;
}

.goto-top-btn {
  position: fixed;
  z-index: 304;
  bottom: 10px;
  right: 10px;
  font-size: 1.5rem;
  height: 3rem;
  width: 3rem;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  letter-spacing: 0px;
  font-family: $title-font;
  font-weight: 500;
  line-height: 46px;
  outline: none !important;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 50%;
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-image: linear-gradient(#ffffff, #ffffff),
    radial-gradient(circle at top left, $primary-color, $primary-color2);
  border: 2px solid transparent;
  color: #222222;
  box-shadow: none;

  &:hover {
    background-image: linear-gradient(
        to right,
        $primary-color 0%,
        $primary-color2 100%
      ),
      radial-gradient(circle at top left, $primary-color, $primary-color2);
    border: double 2px transparent;
    color: #ffffff;
    box-shadow: 0px 10px 30px rgba(118, 85, 225, 0.3);
  }
}
</style>
