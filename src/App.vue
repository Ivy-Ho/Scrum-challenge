<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@font-face {
  font-family: "KFhimaji";
  src: url("./assets/font/KFhimaji.otf") format("opentype");
}
@font-face {
  font-family: "851CHIKARA-YOWAKU";
  src: url("./assets/font/851CHIKARA-YOWAKU.ttf") format("opentype");
}
@font-face {
  font-family: "jf-openhuninn-1.1";
  src: url("./assets/font/jf-openhuninn-1.1.ttf") format("opentype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: KFhimaji;
  background-color: black;
  line-height: 1.5;
  font-weight: $regular;
  width: 100%;
  height: auto;
  @include flex-center-row;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
