<template>
  <div class="task1">
    <p class="task1__text">
      請把需求放到產品待辦清單，並調整待辦的優先度順序。
    </p>
    <img
      class="task1__img task1__img--alli"
      src="@/assets/img/complete-alligator.png"
      alt="alligator image"
    />
    <div class="task1__pad">
      <!-- <button type="button" class="btn pad__btn--question"></button> -->
      <h3 class="pad__header pad__header--h3">Projects / TT / 人才招募系統</h3>
      <h2 class="pad__header pad__header--h2">
        產品待辦清單 (Product Backlog)
      </h2>

      <div class="pad__drag-wrapper">
        <draggable
          class="list-group list-group--1"
          :list="list1"
          group="list-group-item"
        >
          <div
            class="list-group-item pad__draggable-box"
            v-for="element in list1"
            :key="element.name"
          >
            <p class="box__header">{{ element.header }}</p>
            <span class="box__note">{{ element.note }}</span>
          </div>
        </draggable>

        <div class="pad__drag-container">
          <p class="drag-container__note">依優先度排序</p>
          <draggable
            class="list-group list-group--2"
            :list="list2"
            group="list-group-item"
          >
            <div
              class="list-group-item pad__draggable-box"
              v-for="element in list2"
              :key="element.name"
            >
              <p class="box__header">{{ element.header }}</p>
              <span class="box__note">{{ element.note }}</span>
            </div>
          </draggable>
          <ul class="sortable">
            <div class="drag-container__block">1</div>
            <div class="drag-container__block">2</div>
            <div class="drag-container__block">3</div>
            <div class="drag-container__block">4</div>
          </ul>
          <div class="drag-container__bar">
            <p class="bar-text">High</p>
            <p class="bar-text">Low</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="btn pad__btn--done"
        v-if="done"
        @click="nextStep"
      >
        Done!
      </button>
      <button class="btn pad__btn pad__btn--return" @click="restart"></button>
    </div>
    <!-- <p v-if="done" class="task1__footer-note">點擊(?)或畫面繼續 >></p> -->
  </div>
</template>

<script>
import { gsap } from "gsap/all";
export default {
  name: "Start",
  data() {
    return {
      list1: [
        {
          header: "後台職缺管理功能",
          note: "（資訊上架、下架、顯示應徵者資料）",
        },
        {
          header: "會員系統",
          note: "（登入、註冊、權限管理）",
        },
        {
          header: "前台職缺列表",
          note: " (職缺詳細內容、發送應徵意願)",
        },
        {
          header: "線上履歷編輯器",
          note: "",
        },
      ],
      list2: [],
      done: false,
    };
  },
  methods: {
    nextStep() {
      this.$store.commit("NextStep", "end");
    },
    restart() {
      this.list1 = [
        {
          header: "後台職缺管理功能",
          note: "（資訊上架、下架、顯示應徵者資料）",
        },
        {
          header: "會員系統",
          note: "（登入、註冊、權限管理）",
        },
        {
          header: "前台職缺列表",
          note: " (職缺詳細內容、發送應徵意願)",
        },
        {
          header: "線上履歷編輯器",
          note: "",
        },
      ];
      this.list2 = [];
    },
  },
  watch: {
    list1: {
      handler(newValue) {
        this.done = !newValue.length ? true : false;
      },
    },
  },
  mounted() {
    const timeline = gsap.timeline();
    timeline.fromTo(
      ".task1__text",
      {
        xPercent: "80",
      },
      {
        xPercent: "0",
        duration: 2,
      }
    );
    timeline.fromTo(
      ".task1__pad",
      {
        yPercent: "30",
        rotation: 15,
      },
      {
        yPercent: "0",
        rotation: 0,
        duration: 2,
      }
    );
  },
};
</script>
<style lang="scss" scoped>
.task1 {
  @include full;
  position: relative;
  padding-top: 69px;
  font-family: "jf-openhuninn-1.1";

  &__text {
    font-size: 30px;
    color: white;
    letter-spacing: -0.022em;
  }
  &__img {
    position: absolute;
    &--alli {
      width: 520px;
      top: 118px;
      right: 44px;
      z-index: 1;
    }
  }
  &__pad {
    width: 1440px;
    height: 1024px;
    background: url(../assets/img/pad_1h.png) center center / cover;
    position: absolute;
    left: 0;
    z-index: 2;
    top: 0;
    padding-top: 200px;
    padding-left: 230px;
    padding-right: 250px;
    .pad {
      &__btn {
        &--question {
          background: url(../assets/img/question.svg) center center / cover;
          width: 40px;
          height: 40px;
          position: absolute;
          top: 167px;
          right: 310px;
          top: 193px;
          right: 200px;
        }
        &--done {
          font-size: 30px;
          font-family: "851CHIKARA-YOWAKU";
          letter-spacing: -0.022em;
          color: $color-dark;
          position: absolute;
          top: 50%;
          left: 28%;
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
          bottom: 120px;
          right: 200px;
          &:hover {
            scale: 1.2;
          }
        }
      }
      &__header {
        color: $color-dark;
        letter-spacing: 0.05em;
        text-align: left;
        &--h3 {
          font-size: 20px;
        }
        &--h2 {
          font-size: 30px;
          margin-bottom: 71px;
        }
      }
      &__draggable-box {
        width: 256px;
        height: 104px;
        cursor: move;
        transition: all 0.4s ease;
        margin-bottom: 41px;
        background: url(../assets/img/task1-box-bg.png) center center / cover;
        @include flex-center-column;

        &:last-child {
          margin-bottom: 0;
        }
        .box {
          &__header {
            font-size: 20px;
            color: white;
            letter-spacing: -0.022em;
          }
          &__note {
            font-size: 14px;
            color: white;
            letter-spacing: -0.022em;
          }
        }
      }
      &__drag-container {
        background-color: $color-blue;
        width: 430px;
        height: 648px;
        border-radius: 20px;
        position: relative;
        top: -125px;
        padding-top: 25px;
        padding-left: 53px;
        .drag-container__block + .drag-container__block {
          margin-top: 24px;
        }
        .drag-container {
          &__note {
            font-size: 20px;
            color: white;
            letter-spacing: 0.05em;
            text-align: left;
            margin-bottom: 15px;
          }
          &__block {
            width: 276px;
            height: 120px;
            border: 3px dashed white;
            border-radius: 10px;
            font-size: 60px;
            color: rgba(255, 255, 255, 0.4);
            @include flex-center-row;
          }

          &__bar {
            background-color: $color-deep-blue;
            border-radius: 20px;
            width: 62px;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 77px;
            padding-bottom: 54px;
            &::before {
              content: "";
              background: url(../assets/img/arrow.svg) center center / cover
                no-repeat;
              width: 20px;
              height: 394px;
              position: absolute;
              top: 146px;
              left: 21px;
            }
            .bar-text {
              font-size: 30px;
              letter-spacing: 0.05em;
              opacity: 0.6;
              transform: rotate(-90deg);
              color: white;
            }
          }
        }
      }
      &__drag-wrapper {
        display: flex;
        justify-content: space-between;
        padding-left: 100px;
      }
    }
  }
  &__footer-note {
    font-size: 20px;
    color: $color-gray-1;
    position: absolute;
    right: 28px;
    bottom: 17px;
  }
  .list-group--1 {
    display: flex;
    flex-direction: column;
    width: 256px;
  }
  .list-group--2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 368px;
    height: 648px;
    padding-top: 75px;
    padding-left: 64px;
  }
}
</style>
