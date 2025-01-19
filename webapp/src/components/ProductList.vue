<!-- ProductList.vue -->
<template>
  <div>
    <div class="product-list">
      <div
        v-for="product in paginatedProducts"
        :key="product.id"
        class="product-card"
      >
        <img
          :src="product.photos[0]"
          alt="Product Image"
          class="product-image"
        />
        <div class="product-info">
          <h3>{{ product.title }}</h3>
          <div class="tags">
            <span
              v-for="(tag, index) in product.tags"
              :key="`${tag}-${index}`"
              class="tag-label"
            >
              {{ tag }}
            </span>
          </div>
          <div class="actions">
            <button
              class="details-button"
              @click="goToProductDetail(product.id)"
            >
              View Details
            </button>
            <button
              class="add-to-cart"
              @click="handleAddToCart(product)"
              :class="{ 'cart-animation': addedProductId === product.id }"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { fetchProducts } from "../services/apiService";
import { mapActions } from "vuex";

export default defineComponent({
  name: "ProductList",
  data() {
    return {
      products: [] as Array<{
        id: number;
        title: string;
        tags: string[];
        photos: string[];
      }>,
      currentPage: 1,
      itemsPerPage: 20,
      addedProductId: null as number | null,
    };
  },
  computed: {
    // คำนวณจำนวนหน้าทั้งหมดที่แบ่ง pageination
    totalPages(): number {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    paginatedProducts(): Array<{
      id: number;
      title: string;
      tags: string[];
      photos: string[];
    }> {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.products.slice(start, end);
    },
  },
  async created() {
    // ดึงข้อมูลสินค้าจาก API เมื่อ Component ถูกสร้าง
    try {
      this.products = await fetchProducts();
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },
  // ใช้ Vuex Action สำหรับเพิ่มสินค้าในตะกร้า
  methods: {
    ...mapActions("ShoppingCart", {
      addToCart: "addToCart",
    }),
    goToProductDetail(productId: number) {
      this.$router.push(`/product/${productId}`);
    },
    handleAddToCart(product: any) {
      this.addToCart(product);
      this.addedProductId = product.id;
      setTimeout(() => {
        this.addedProductId = null;
      }, 1000);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
});
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 200px;
  text-align: left;
  background-color: #fff;
}

.product-card h3 {
  margin: 4px 0;
  font-family: "Arial", sans-serif;
}

.product-image {
  width: 100%;
  height: auto;
  max-height: 150px;
  object-fit: cover;
  border-radius: 4px;
}

.product-info {
  margin-top: 8px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 4px 0 0 8px;
}

.tag-label {
  background-color: #e0e0e0;
  color: #333;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-family: "Arial", sans-serif;
}

.actions {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.details-button,
.add-to-cart {
  flex: 1;
  margin: 0 4px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 0;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
}

.details-button {
  background-color: #007bff;
}

.details-button:hover {
  background-color: #0056b3;
}

.add-to-cart {
  background-color: #28a745;
  transition: all 0.3s ease;
}

.add-to-cart.cart-animation {
  background-color: #218838;
  transform: scale(1.1);
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
}

.pagination button {
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination span {
  font-size: 16px;
}
</style>
