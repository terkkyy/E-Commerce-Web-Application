// store - index.ts

import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import ShoppingCart from "./cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ShoppingCart,
  },
  plugins: [
    createPersistedState({
      key: "shopping-cart",
      paths: ["ShoppingCart.items"],
      storage: window.localStorage,
    }),
  ],
});
