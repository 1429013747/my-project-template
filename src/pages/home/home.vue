<template>
  <div class="home">
    <h1 @click="request">{{ msg }} Page</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  mixins: [],
  props: {
    msg: {
      type: String,
      default: "Home",
    },
  },
  data: function() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    request() {
      this.$http.get("/users").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
