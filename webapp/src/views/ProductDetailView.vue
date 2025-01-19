<!-- views - ProductDetailView.vue -->

<template>
  <HeaderProduct />
  <ProductDetail />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductDetail from "../components/ProductDetail.vue";
import HeaderProduct from "../components/HeaderProduct.vue";

export default defineComponent({
  components: { ProductDetail, HeaderProduct },
});
</script>
