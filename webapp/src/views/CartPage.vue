<!-- views - CartPage.vue -->

<template>
  <ShoppingCart />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShoppingCart from "../components/Cart.vue";

export default defineComponent({
  components: { ShoppingCart },
});
</script>
