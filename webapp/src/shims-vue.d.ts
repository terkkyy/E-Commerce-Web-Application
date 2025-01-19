// src/shims-vue.d.ts
import { Store } from "vuex";
import { Route } from "vue-router";

declare module "vue" {
  interface ComponentCustomProperties {
    $store: Store<any>;
    $route: Route;
  }

  declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
  }
}
