<template>
  <div class="product-detail-card" v-if="product">
    <div class="image-container">
      <img :src="product.photos[0]" alt="Product Image" class="product-image" />
    </div>
    <h1 class="product-title">{{ product.title }}</h1>
    <div class="product-tags">
      <span v-for="(tag, index) in product.tags" :key="index" class="tag">
        {{ tag }}
      </span>
    </div>
    <p class="product-price">Price: {{ product.price }} BATH</p>
    <p class="product-description">{{ product.description }}</p>

    <button
      @click="handleAddToCart(product)"
      :class="{ animate: isAnimating }"
      class="add-to-cart"
    >
      Add to Cart
    </button>
  </div>
  <div v-else>
    <p>Loading product details...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchProducts } from "../services/apiService";

interface Product {
  id: number;
  title: string;
  description: string;
  photos: string[];
  price: number;
  tags: string[];
}

export default defineComponent({
  name: "ProductDetail",
  data() {
    return {
      product: null as Product | null,
      isAnimating: false,
    };
  },
  async created() {
    // ดึงข้อมูลสินค้าจาก API
    try {
      const products = await fetchProducts();
      const id = parseInt(this.$route.params.id, 10); // อ่าน ID จาก URL
      this.product = products.find((p: Product) => p.id === id) || null;

      if (!this.product) {
        console.error("Product not found");
      } else {
        console.log("Selected Product:", this.product);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },
  methods: {
    handleAddToCart(product: Product) {
      this.isAnimating = true;
      this.$store.dispatch("ShoppingCart/addToCart", product);
      console.log("Adding product to cart:", product);

      setTimeout(() => {
        this.isAnimating = false;
      }, 1000);
    },
  },
});
</script>

<style scoped>
.product-detail-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 300px;
  margin: 20px auto;
  text-align: left;
  background-color: #fff;
  font-family: "Arial", sans-serif;
}

.image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 16px;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.product-price {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
}

.product-description {
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
}

.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  background-color: #f0f0f0;
  color: #555;
  font-size: 12px;
  border-radius: 4px;
  padding: 4px 8px;
}

.add-to-cart {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  transition: transform 0.3s, background-color 0.3s;
}

.add-to-cart.animate {
  transform: scale(1.1);
  background-color: #218838;
}

.add-to-cart:hover {
  background-color: #218838;
}
</style>
