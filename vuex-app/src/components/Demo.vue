<template>
  <keep-alive>
    <div id="demo">
      <div>{{ count }}</div>
      <div><button @click="decrement">Decrement</button></div>
      <div>
        <router-link to="/">List</router-link>
      </div>
    </div>
  </keep-alive></template
>

<script>
export default {
  name: "Demo",
  methods: {
    decrement() {
      this.$store.commit("decrement");
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
<style lang="scss" scoped>
#demo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20vh;
}
</style>
