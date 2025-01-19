// store - CartPage.ts

import { Commit } from "vuex";

interface Product {
  id: number;
  title: string;
  description: string;
  photos: string[];
}

interface CartItem extends Product {
  quantity: number;
}

export default {
  namespaced: true,
  state: {
    items: [] as CartItem[],
  },
  mutations: {
    // Mutations: เพิ่มสินค้าในตะกร้าหรือเพิ่มจำนวนสินค้า
    ADD_TO_CART(state: any, product: Product) {
      const existingItem = state.items.find(
        (item: CartItem) => item.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      console.log("Current cart items after addition:", state.items);
    },
    // Mutations: ลบสินค้าหรือลดจำนวนสินค้าในตะกร้า
    REMOVE_FROM_CART(state: any, productId: number) {
      const existingItemIndex = state.items.findIndex(
        (item: CartItem) => item.id === productId
      );
      if (existingItemIndex !== -1) {
        const item = state.items[existingItemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items.splice(existingItemIndex, 1);
        }
      }
      console.log("Current cart items after removal:", state.items);
    },
  },
  actions: {
    // Actions: เรียก Mutations เพื่อเปลี่ยนแปลงข้อมูล
    addToCart({ commit }: { commit: Commit }, product: Product) {
      console.log("Dispatching addToCart with product:", product);
      commit("ADD_TO_CART", product);
    },
    removeFromCart({ commit }: { commit: Commit }, productId: number) {
      console.log("Dispatching removeFromCart with ID:", productId);
      commit("REMOVE_FROM_CART", productId);
    },
  },
  getters: {
    // Getters: ดึงข้อมูลจาก State 
    // คำนวณจำนวนสินค้ารวมทั้งหมด
    cartItems: (state: any) => state.items,
    totalItems: (state: any) =>
      state.items.reduce(
        (sum: number, item: CartItem) => sum + item.quantity,
        0
      ),
  },
};
