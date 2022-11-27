<template>
  <div class="loading">
    <p class="loading__text">Loading...</p>
  </div>
</template>

<script>
export default {
  name: "Loading",
  mounted() {
    setTimeout(() => {
      this.$store.commit("NextStep", "start");
      return;
    }, 4000);
  },
};
</script>
<style lang="scss" scoped>
.loading {
  @include full;
  background: url(../assets/img/loading.gif) center center / cover no-repeat;
  position: relative;
  &__text {
    color: $color-gray-1;
    font-size: 40px;
    position: absolute;
    letter-spacing: -0.022em;
    bottom: 207px;
    left: 50%;
    transform: translateX(-50%);
    font-family: "KFhimaji";
  }
}
</style>
