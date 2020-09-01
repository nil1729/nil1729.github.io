<template>
  <section class="newsletter_area" id="get-started">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <div class="subscription_box text-center">
            <h2 class="text-uppercase text-white">get update of my blogs</h2>
            <div class="subcribe-form" id="mc_embed_signup">
              <form
                @submit.prevent="handleSubscription"
                target="_blank"
                class="subscription relative"
              >
                <input
                  name="EMAIL"
                  placeholder="Email address"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Email address'"
                  required
                  type="email"
                  v-model="email"
                />
                <div style="position: absolute; left: -5000px">
                  <input tabindex="-1" value type="email" />
                </div>
                <button type="submit" class="ml-2 primary-btn hover d-inline">
                  <span>Get Started</span>
                </button>
                <div class="info"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "my-subscription",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    handleSubscription() {
      console.log(this.email);
      this.email = "";
    },
  },
};
</script>

<style lang="scss">
@import "../../utils/scss/_variable.scss";
@import "../../utils/scss/_mixins.scss";
// @import "../../utils/scss/_predefine.scss";
// @import "../../utils/scss/_reset.scss";
.newsletter_area {
  color: #ffffff;
  padding-top: 80px;

  @media (max-width: 1199px) {
    padding-top: 30px;
  }
}

.subscription_box {
  background: url(../../../assets/backgrounds/subscribe-bg.png) no-repeat center;
  padding: 150px 0px;
  @media (max-width: 767px) {
    padding: 50px 20px;
  }
  h2 {
    font-weight: 700;
    margin-bottom: 20px;
    @media (max-width: 767px) {
      font-size: 30px;
    }
  }
  p {
    margin-bottom: 0;
  }
  .subscription {
    input {
      min-width: 380px;
      max-width: 380px;
      line-height: 41px;
      letter-spacing: 1px;
      font-family: $title-font;
      padding: 0 15px;
      border: 1px solid #ffffff;
      background: transparent;
      font-weight: 400;
      color: #ffffff;
      &:focus {
        outline: none;
      }
      @media (max-width: 420px) {
        min-width: 250px;
      }
      @include placeholder {
        color: #ffffff;
        font-weight: 300;
      }
    }
  }
  .primary-btn {
    margin-left: 10px;
    background: #ffffff;
    text-transform: uppercase;
    color: #222222;
    border-width: 0;
    line-height: 43px;
    font-size: 14px;
    font-family: $title-font;
    padding: 0px 38px;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 0.5px;
    @media (max-width: 767px) {
      margin-top: 20px;
    }
  }
  .subcribe-form {
    margin-top: 45px;
  }
}

.subscription .info {
  color: #fff;
  width: 100%;
  font-size: 12px;
  background: transparent;
}

.subscription .info.valid {
  color: green;
}

.subscription .info.error {
  color: red;
}
</style>