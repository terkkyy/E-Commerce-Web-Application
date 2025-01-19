<template>
  <div class="header">
    <h1>E-Commerce web application</h1>
    <div class="navigation-icons">
      <button class="list-icon" @click="goToProductList">📦</button>
      <button class="cart-icon" @click="goToCart">🛒</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderProduct",
  methods: {
    goToCart() {
      const currentRoute = this.$router.currentRoute.path;
      if (currentRoute !== "/ShoppingCart") {
        this.$router.push("/ShoppingCart");
      }
    },
    goToProductList() {
      const currentRoute = this.$router.currentRoute.path;
      if (currentRoute !== "/") {
        this.$router.push("/");
      }
    },
  },
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f8f9fa;
  font-family: "Arial", sans-serif;
}

.navigation-icons {
  display: flex;
  gap: 20px;
}

.list-icon,
.cart-icon {
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
}

.list-icon:hover {
  color: #007bff;
}

.cart-icon:hover {
  color: #28a745;
}
</style>
