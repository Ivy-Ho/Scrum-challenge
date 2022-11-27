<template>
  <div class="start">
    <div class="yellow-bar start__bar start__bar--top">
      *SCRUM*SCRUM*SCRUM*SCRUM*SCRUM*SCRUM*
    </div>
    <h2 class="start__subheader">SCRUM</h2>
    <h1 class="start__header">新手村</h1>
    <img src="@/assets/img/spark.gif" alt="spark gif" class="start__spark" />
    <button class="btn start__btn" type="button" @click="nextStep">
      START
    </button>
    <p class="start__designer">design by Rong</p>
    <img
      class="start__img start__img--alli"
      src="@/assets/img/start-alligator.png"
      alt="alligator image"
    />
    <img
      class="start__img start__img--dog"
      src="@/assets/img/dog.png"
      alt="dog image"
    />
    <div class="yellow-bar start__bar start__bar--bottom">
      *SCRUM*SCRUM*SCRUM*SCRUM*SCRUM*SCRUM*
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap/all";
export default {
  name: "Start",
  methods: {
    nextStep() {
      this.$store.commit("NextStep", "story");
    },
  },
  mounted() {
    const timeline = gsap.timeline();

    timeline.fromTo(
      ".start__subheader",
      {
        opacity: "0",
      },
      {
        opacity: "1",
        duration: 1,
      }
    );
    timeline.fromTo(
      ".start__header",
      {
        opacity: "0",
      },
      {
        opacity: "1",
        duration: 1,
      },
      "<"
    );
    timeline.fromTo(
      ".start__designer",
      {
        opacity: "0",
      },
      {
        opacity: "1",
        duration: 1,
      },
      "<"
    );
    timeline.fromTo(
      ".start__bar--top",
      {
        xPercent: "100",
      },
      {
        xPercent: "0",
        duration: 1,
      }
    );
    timeline.fromTo(
      ".start__bar--bottom",
      {
        xPercent: "-100",
      },
      {
        xPercent: "0",
        duration: 1,
      },
      "<"
    );
    timeline.fromTo(
      ".start__img--alli",
      {
        yPercent: "100",
      },
      {
        yPercent: "0",
        duration: 1,
      }
    );
    timeline.fromTo(
      ".start__img--dog",
      {
        yPercent: "100",
      },
      {
        yPercent: "0",
        duration: 1,
      }
    );
    timeline.fromTo(
      ".start__spark",
      {
        opacity: "0",
      },
      {
        opacity: "1",
        duration: 1,
      }
    );
    timeline.fromTo(
      ".start__btn",
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
};
</script>
<style lang="scss" scoped>
.start {
  @include full;
  @include flex-center-column;
  position: relative;
  &__header {
    font-size: 180px;
    color: white;
    margin-bottom: 108px;
  }
  &__subheader {
    font-size: 80px;
    color: white;
    line-height: 1;
  }
  &__spark {
    width: 68px;
    position: absolute;
    top: 555px;
    left: 937px;
    transform: matrix(-0.83, 0.56, 0.56, 0.83, 0, 0);
  }
  &__btn {
    color: $color-yellow;
    font-size: 60px;
    margin-bottom: 48px;
  }
  &__designer {
    font-family: "jf-openhuninn-1.1";
    font-size: 20px;
    font-weight: $bold;
    color: $color-gray-2;
    line-height: 1;
  }
  &__img {
    position: absolute;
    bottom: 0;
    &--alli {
      width: 542px;
      left: 0;
    }
    &--dog {
      width: 549px;
      right: 0;
    }
  }
  &__bar {
    position: absolute;
    left: 0;
    right: 0;
    &--top {
      top: 0;
    }
    &--bottom {
      bottom: 0;
    }
  }
}
</style>
