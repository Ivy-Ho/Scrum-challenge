<template>
  <div class="home">
    <div class="container">
      <Loading v-if="$store.state.step === 'loading'" />
      <Start v-if="$store.state.step === 'start'" />
      <Story v-if="$store.state.step === 'story'" />
      <Introduce v-if="$store.state.step === 'introduce'" />
      <Task1 v-if="$store.state.step === 'task1'" />
      <End v-if="$store.state.step === 'end'" />
    </div>
  </div>
</template>
<script>
import Loading from "@/components/Loading.vue";
import Start from "@/components/Start.vue";
import Story from "@/components/Story.vue";
import Introduce from "@/components/Introduce.vue";
import Task1 from "@/components/Task1.vue";
import End from "@/components/End.vue";

export default {
  name: "Home",
  components: {
    Loading,
    Start,
    Story,
    Introduce,
    Task1,
    End,
  },
};
</script>
<style lang="scss">
.container {
  width: 1440px;
  height: 1024px;
  margin: 0 auto;
  overflow: hidden;
  background-color: $color-bg;
}
</style>
