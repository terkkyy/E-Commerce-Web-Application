<!-- App.vue -->

<template>
  <div>
    <HeaderProduct />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderProduct from "./components/HeaderProduct.vue";

export default defineComponent({
  components: { HeaderProduct },
});
</script>
