import Vue from "vue";
import Vuex from "vuex";

import * as types from "./types";

Vue.use(Vuex);

// 动态加载modules
const modules = {};
const files = require.context("./", true, /index\.js$/);
files
  .keys()
  .filter((key) => {
    if (key === "./index.js") return false;
    return true;
  })
  .map((key) => {
    // 获取名字
    const moduleName = key.replace(/(\.\/modules\/)|(\/index\.js)/g, "");
    const module = require(`${key}`);
    modules[`${moduleName}`] = module.default;
  });

const store = new Vuex.Store({
  state: {
    testValue: "testValue",
  },
  getters: {
    getTestValue: (state) => state.testValue + "Getter",
  },
  mutations: {
    setTestValue(state, value) {
      // 首字母大写
      state.testValue = value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  actions: {
    // 延迟提交testValue修改
    actionTestValue(context, value) {
      setTimeout(() => {
        context.commit("setTestValue", value);
      }, 3000);
    },
  },
  modules: modules,
});
export default store;
