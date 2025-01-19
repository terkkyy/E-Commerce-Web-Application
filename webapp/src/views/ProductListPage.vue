<!-- views - ProductListPage.vue -->

<template>
  <HeaderProduct />
  <ProductList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductList from "../components/ProductList.vue";
import HeaderProduct from "../components/HeaderProduct.vue";

export default defineComponent({
  name: "ProductListPage",
  components: { ProductList, HeaderProduct },
});
</script>
