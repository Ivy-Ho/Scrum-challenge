<template>
  <div class="story">
    <img
      class="story__alli"
      src="@/assets/img/complete-alligator.png"
      alt="alligator image"
    />
    <div class="story__pad">
      <div class="story__pad-wrapper">
        <p class="story__text">
          Welcome to TT 資訊， <br />
          在加入我們之前，請先<br />
          了解 Scrum 的精神並通過任務!
        </p>
        <button type="button" class="btn story__btn" @click="nextStep">
          接受
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap/all";
export default {
  name: "Story",
  methods: {
    nextStep() {
      this.$store.commit("NextStep", "introduce");
    },
  },
  mounted() {
    const timeline = gsap.timeline();

    timeline.fromTo(
      ".story__pad",
      {
        yPercent: "30",
        scale: "0.9",
      },
      {
        yPercent: "0",
        duration: 2,
        scale: "1",
      }
    );
  },
};
</script>
<style lang="scss" scoped>
.story {
  @include full;
  // @include flex-center-column;
  position: relative;
  &__alli {
    width: 520px;
    margin-top: 54px;
  }
  &__pad {
    @include full;
    @include flex-center-row;
    background: url(../assets/img/pad-2h.png) center center / cover no-repeat;
    position: absolute;
    bottom: 0;
  }
  &__text {
    font-size: 45px;
    margin-bottom: 86px;
    font-family: "jf-openhuninn-1.1";
  }
  &__btn {
    font-size: 68px;
    font-family: "851CHIKARA-YOWAKU";
    color: $color-dark;
    &:hover {
      scale: 1.2;
      color: $color-deep-blue;
    }
  }
}
</style>
