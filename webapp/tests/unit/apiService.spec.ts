import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchProducts } from "../../src/services/apiService";

describe("apiService", () => {
  let mock: InstanceType<typeof MockAdapter>;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it("should fetch products successfully", async () => {
    const mockProducts = [
      { id: 1, title: "Product A", price: 100 },
      { id: 2, title: "Product B", price: 200 },
    ];

    mock.onGet("http://localhost:3000").reply(200, { products: mockProducts });

    const products = await fetchProducts();
    expect(products).toEqual(mockProducts);
  });

  it("should handle API errors", async () => {
    mock.onGet("http://localhost:3000").reply(404);

    await expect(fetchProducts()).rejects.toThrow();
  });
});
