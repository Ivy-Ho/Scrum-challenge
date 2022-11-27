<template>
  <div class="introduce">
    <img
      class="introduce__img introduce__img--alli"
      src="@/assets/img/complete-alligator.png"
      alt="alligator image"
    />
    <img
      class="introduce__img introduce__img--bla"
      src="@/assets/img/bla.gif"
      alt="alligator image"
    />
    <div class="introduce__outer-block">
      <div class="introduce__inner-block">
        <div class="introduce__text-wrapper">
          <p class="introduce__text introduce__text--1">
            我是 TT 資訊，開發組的 PO。 <br />
            PO 就是產品負責人（Product
            Owner），產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。<br />
            最後排出產品待辦清單（Product Backlog）唷！
          </p>
          <p class="introduce__text introduce__text--2">
            剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。
            既然你都來了，就讓你來試試看調整產品優先度，排出產品待辦清單吧！
          </p>
        </div>
        <button
          class="btn introduce__btn introduce__btn--continue"
          @click="moveOn"
        >
          <div class="triangle"></div>
        </button>
        <button class="btn introduce__btn introduce__btn--go" @click="nextStep">
          Ｇｏ
        </button>
        <button
          class="btn introduce__btn introduce__btn--return"
          @click="restart"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap/all";
export default {
  name: "Introduce",
  data() {
    return {
      timeline: gsap.timeline(),
    };
  },
  methods: {
    startAnimation() {
      this.timeline.fromTo(
        ".introduce__img--alli",
        {
          xPercent: "-100",
          opacity: "0",
        },
        {
          opacity: "1",
          xPercent: "0",
          duration: 1,
        }
      );
      this.timeline.fromTo(
        ".introduce__text--1",
        {
          opacity: "0",
        },
        {
          opacity: "1",
          duration: 1,
        },
        "<"
      );
      this.timeline.fromTo(
        ".introduce__btn--continue",
        {
          opacity: "0",
        },
        {
          opacity: "1",
          duration: 1,
        },
        "<"
      );
    },
    nextStep() {
      this.$store.commit("NextStep", "task1");
    },
    moveOn() {
      this.timeline.to(".introduce__text--1", {
        yPercent: "-130",
        duration: 1,
      });
      this.timeline.fromTo(
        ".introduce__text--2",
        {
          yPercent: "0",
          duration: 1,
          opacity: "0",
        },
        {
          yPercent: "-140",
          duration: 1,
          opacity: "1",
        },
        "<"
      );
      this.timeline.to(
        ".introduce__img--bla",
        {
          duration: 1,
          opacity: "1",
        },
        "<"
      );
      this.timeline.to(
        ".introduce__btn--continue",
        {
          duration: 1,
          opacity: "0",
        },
        "<"
      );
      this.timeline.to(
        ".introduce__btn--return",
        {
          display: "block",
          duration: 1,
          opacity: 1,
        },
        "<"
      );
      this.timeline.to(".introduce__btn--go", {
        display: "block",
        duration: 1,
        opacity: 1,
      });
    },
    restart() {
      this.timeline.restart();
      this.timeline.killTweensOf(".introduce__text--1", "yPercent");
      this.timeline.killTweensOf(".introduce__text--2");
      this.timeline.killTweensOf(".introduce__img--bla");
      this.timeline.killTweensOf(".introduce__btn--continue");
      this.timeline.fromTo(
        ".introduce__btn--continue",
        {
          opacity: "0",
        },
        {
          opacity: "1",
        },
        "<"
      );
      this.timeline.killTweensOf(".introduce__btn--go");
    },
  },
  mounted() {
    this.startAnimation();
  },
};
</script>
<style lang="scss" scoped>
.introduce {
  @include full;
  position: relative;
  &__img {
    position: absolute;
    &--alli {
      width: 520px;
      transform: scaleX(-1);
      top: 67px;
      left: 60px;
    }
    &--bla {
      width: 177px;
      top: 67px;
      left: 524px;
      transform: rotate(12.33deg);
      opacity: 0;
    }
  }
  &__outer-block {
    width: 1280px;
    height: 400px;
    background-color: $color-gray-1;
    border: 4px solid $color-darker;
    border-radius: 8px;
    padding: 20px;
    margin: 0 auto;
    transform: translateY(143%);
  }
  &__inner-block {
    width: 100%;
    height: 100%;
    background-color: $color-bright;
    border: 4px solid $color-darker;
    border-radius: 8px;
    padding: 60px 76px 0 60px;
    position: relative;
  }
  &__text-wrapper {
    overflow: hidden;
  }
  &__text {
    font-family: "jf-openhuninn-1.1";
    font-size: 32px;
    text-align: justify;
    letter-spacing: 0.05em;
    color: $color-dark;
    &--2 {
      opacity: 0;
    }
  }
  &__btn {
    &--continue {
      background: url(../assets/img/continue-icon.svg) center center / cover;
      width: 31px;
      height: 25px;
      position: absolute;
      bottom: 23px;
      &:hover {
        scale: 1.2;
      }
    }
    &--go {
      font-size: 68px;
      color: $color-dark;
      font-family: "851CHIKARA-YOWAKU";
      position: absolute;
      bottom: 23px;
      left: 50%;
      transform: translateX(-50%);
      display: none;
      opacity: 0;
      &:hover {
        scale: 1.2;
        color: $color-deep-blue;
      }
    }
    &--return {
      width: 36px;
      height: 36px;
      background: url(../assets/img/return-icon.svg) center center / cover
        no-repeat;
      position: absolute;
      right: 82px;
      bottom: 65px;
      display: none;
      opacity: 0;
    }
  }
}
</style>
