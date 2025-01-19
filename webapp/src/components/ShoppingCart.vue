<!-- ShoppingCart.vue -->
<template>
  <div class="shopping-cart">
    <div v-if="cartItems.length === 0" class="empty-cart">
      <h1>Your cart is empty.</h1>
    </div>
    <div v-else>
      <h1 class="cart-title">Your Shopping Cart</h1>
      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <div class="item-details">
          <h3>{{ item.title }}</h3>
          <p>
            Quantity: <strong>x{{ item.quantity }}</strong>
          </p>
          <p>
            Item Total: <strong>{{ itemTotal(item) }} BATH</strong>
          </p>
        </div>
        <div class="item-actions">
          <button @click="removeFromCart(item.id)">-</button>
          <button @click="addToCart(item)">+</button>
        </div>
      </div>
      <div class="cart-summary">
        <p>
          Total Items: <strong>{{ totalQuantity }}</strong>
        </p>
        <p>
          Grand Total: <strong>{{ grandTotal }} BATH</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export default defineComponent({
  name: "ShoppingCart",
  computed: {
    cartItems(): CartItem[] {
      return this.$store.getters["ShoppingCart/cartItems"];
    },
    totalQuantity(): number {
      return this.cartItems.reduce(
        (total: number, item: CartItem) => total + item.quantity,
        0
      );
    },
    grandTotal(): number {
      return this.cartItems.reduce(
        (total: number, item: CartItem) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    itemTotal(item: CartItem): number {
      return item.price * item.quantity;
    },
    addToCart(product: CartItem) {
      console.log("Adding product with ID:", product.id);
      this.$store.dispatch("ShoppingCart/addToCart", product);
    },
    removeFromCart(productId: number) {
      console.log("Removing product with ID:", productId);
      this.$store.dispatch("ShoppingCart/removeFromCart", productId);
    },
  },
});
</script>

<style scoped>
.shopping-cart {
  max-width: 600px;
  margin: 20px auto;
  font-family: "Arial", sans-serif;
  text-align: center;
}

.empty-cart {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f8f9fa;
}

.empty-cart h1 {
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.cart-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

.item-details p {
  margin: 4px 0 0;
  font-size: 14px;
}

.item-details strong {
  color: #333;
}

.cart-summary p {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.cart-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
}

.item-details h3 {
  font-size: 18px;
  margin: 0;
}

.item-details p {
  margin: 4px 0 0;
  font-size: 14px;
}

.item-actions {
  display: flex;
  gap: 10px;
}

.item-actions button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
}

.item-actions button:hover {
  background-color: #0056b3;
}

.cart-summary {
  text-align: right;
  font-size: 16px;
  margin-top: 16px;
  font-weight: bold;
}
</style>
