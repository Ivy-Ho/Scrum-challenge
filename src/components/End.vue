<template>
  <div class="end">
    <button class="btn end__btn end__btn--return" @click="restart"></button>

    <img
      class="end__img end__img--bla1"
      src="@/assets/img/bla.gif"
      alt="alligator image"
    />
    <img
      class="end__img end__img--bla2"
      src="@/assets/img/bla.gif"
      alt="alligator image"
    />
    <img
      class="end__img end__img--bla3"
      src="@/assets/img/bla.gif"
      alt="alligator image"
    />

    <img
      class="end__img end__img--m2"
      src="@/assets/img/member-2.png"
      alt="alligator image"
    />
    <img
      class="end__img end__img--m4"
      src="@/assets/img/member-4.png"
      alt="alligator image"
    />
    <img
      class="end__img end__img--m1"
      src="@/assets/img/member-1.png"
      alt="alligator image"
    />
    <img
      class="end__img end__img--m3"
      src="@/assets/img/member-3.png"
      alt="alligator image"
    />
    <img
      class="end__img end__img--alli"
      src="@/assets/img/complete-alligator.png"
      alt="alligator image"
    />
    <div class="end__footer">
      <img
        class="footer__spark footer__spark--left"
        src="@/assets/img/spark.gif"
        alt="spark image"
      />
      <img
        class="footer__spark footer__spark--right"
        src="@/assets/img/spark.gif"
        alt="spark image"
      />
    </div>
    <div class="yellow-bar end__bar">*SCRUM*SCRUM*SCRUM*SCRUM*SCRUM*</div>
  </div>
</template>

<script>
export default {
  name: "End",
  methods: {
    restart() {
      this.$store.commit("NextStep", "loading");
    },
  },
};
</script>
<style lang="scss" scoped>
.end {
  @include full;
  position: relative;
  &__btn {
    &--return {
      width: 36px;
      height: 36px;
      background: url(../assets/img/return-icon.svg) center center / cover
        no-repeat;
      position: absolute;
      top: 45px;
      right: 45px;
      &:hover {
        scale: 1.2;
      }
    }
  }
  &__img {
    position: absolute;
    &--bla1 {
      width: 133px;
      left: 207px;
      top: 88.13px;
      transform: rotate(-15.26deg);
    }
    &--bla2 {
      width: 133px;
      left: 758.38px;
      top: 29px;
      transform: rotate(12.33deg);
    }
    &--bla3 {
      width: 133px;
      left: 1113.38px;
      top: 64px;
      transform: rotate(12.33deg);
    }
    &--m2 {
      width: 693px;
      top: 115px;
      left: 142px;
    }
    &--m4 {
      width: 624px;
      top: 174px;
      right: 196px;
    }
    &--m1 {
      width: 544px;
      top: 159px;
      left: -8px;
    }
    &--m3 {
      width: 745px;
      top: 53px;
      right: 326px;
    }
    &--alli {
      width: 588px;
      top: 159px;
      right: -133px;
    }
  }
  &__bar {
    font-size: 46px;
    width: 1466px;
    position: absolute;
    bottom: 232px;
    left: -25px;
    transform: rotate(-2.85deg);
  }
  &__footer {
    width: 100%;
    height: 338px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-right: 1440px solid $color-deep-red;
    border-top: 143px solid transparent;
    .footer {
      &__spark {
        width: 68px;
        height: 65px;
        position: absolute;
        bottom: 77px;
        &--left {
          transform: scaleX(-1) rotate(33.84deg);
          left: 129px;
          bottom: 80px;
        }
        &--right {
          transform: rotate(33.84deg);
          right: 26px;
          left: 1255px;
          bottom: 90px;
        }
      }
    }
    &::after {
      content: "恭喜加入 S C R U M 新手村";
      font-size: 80px;
      font-family: "KFhimaji";
      letter-spacing: -0.022em;
      color: white;
      width: 1114px;
      text-align: left;
      position: absolute;
      left: 207px;
      bottom: 31px;
    }
  }
}
</style>
