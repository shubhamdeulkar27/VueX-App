import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./routes.js";
import Vuex from "vuex";

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  mode: "history",
  routes: Routes
});

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      this.state.count--;
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App),
  router: router,
  store
});
