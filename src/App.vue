<template>
  <div id="app">
    <router-view></router-view>
    <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <img alt="Vue logo" src="./assets/img/logo.png" />
    <HelloWorld msg="a custom vue template" />
    <p>testValue：{{ testValue }}</p>
    <p>getTestValue：{{ getTestValue }}</p>
    <p>
      <em>testHomeValue：{{ testHomeValue }}</em>
    </p>
    <p>
      <em>getTestHomeValue：{{ getTestHomeValue }}</em>
    </p>
  </div>
</template>

<script>
import HelloWorld from "components/HelloWorld.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
  mounted: function() {
    //主模块的mutations与actions
    this.setTestValue("blue");
    this.actionTestValue("color");
    //home模块的mutations与actions
    this.setTestHmoeValue("homeRed");
    this.actionTestHomeValue("homeColor");
  },
  computed: {
    ...mapState(["testValue"]),
    ...mapGetters(["getTestValue"]),

    ...mapState("home", ["testHomeValue"]),
    ...mapGetters("home", ["getTestHomeValue"]),
  },
  methods: {
    // 主模块的mutations与actions
    ...mapMutations(["setTestValue"]),
    ...mapActions(["actionTestValue"]),
    // 1.home模块的mutations与actions
    // ...mapMutations("home", ["setTestHmoeValue"]),
    // ...mapActions("home", ["actionTestHomeValue"]),
    // 2.home模块的mutations与actions
    // ...mapMutations({
    //   setTestHmoeValue: "home/setTestHmoeValue",
    // }),
    // ...mapActions({
    //   actionTestHomeValue: "home/actionTestHomeValue",
    // }),
    // 4.home模块的mutations与actions
    // ...mapMutations("home", {
    //   setTestHmoeValue: "setTestHmoeValue",
    // }),
    // ...mapActions("home", {
    //   actionTestHomeValue: "actionTestHomeValue",
    // }),
    // 5.home模块的mutations与actions (不用mapMutations和mapActions)
    setTestHmoeValue(value) {
      this.$store.commit("home/setTestHmoeValue", value);
    },
    actionTestHomeValue(value) {
      this.$store.dispatch("home/actionTestHomeValue", value);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
