<template>
  <div id="list">
    <div>{{ count }}</div>
    <div><button @click="increment">Increment</button></div>
    <div><router-link to="/demo">Demo</router-link></div>
  </div></template
>
<script>
export default {
  name: "List",
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>
<style lang="css" scoped>
#list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20vh;
}
</style>
