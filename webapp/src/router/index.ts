// router - index.ts

import Vue from "vue";
import Router from "vue-router";
import ProductList from "@/components/ProductList.vue";
import ProductDetail from "@/components/ProductDetail.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "ProductList",
      component: ProductList,
    },
    {
      path: "/product/:id",
      name: "ProductDetail",
      component: ProductDetail,
    },
    {
      path: "/ShoppingCart",
      name: "ShoppingCart",
      component: ShoppingCart,
    },
  ],
});
