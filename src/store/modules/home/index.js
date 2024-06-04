import * as types from "./types.js";
export default {
  namespaced: true,
  state: {
    testHomeValue: "testHomeValue",
  },
  getters: {
    getTestHomeValue: (state) => state.testHomeValue + "Getter",
  },
  mutations: {
    setTestHmoeValue(state, value) {
      state.testHomeValue = value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  actions: {
    actionTestHomeValue(context, value) {
      setTimeout(() => {
        context.commit("setTestHmoeValue", value);
      }, 3000);
    },
  },
};
