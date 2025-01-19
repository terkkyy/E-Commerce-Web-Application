// service - apiService.ts

import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    console.log("API Response:", response.data.products);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
