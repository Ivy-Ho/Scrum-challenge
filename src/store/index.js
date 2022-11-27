import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: "loading",
  },
  mutations: {
    NextStep(state, stepStr) {
      state.step = stepStr;
    },
  },
  actions: {},
  modules: {},
});
