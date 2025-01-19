import CartPage from "../../src/store/cart";

describe("CartPage Mutations", () => {
  it("should add a product to the cart", () => {
    const state = { items: [] };
    const product = {
      id: 1,
      title: "Product A",
      description: "Desc A",
      photos: [],
    };

    CartPage.mutations.ADD_TO_CART(state, product);

    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual({ ...product, quantity: 1 });
  });

  it("should increment quantity if product already exists", () => {
    const state = {
      items: [
        {
          id: 1,
          title: "Product A",
          description: "Desc A",
          photos: [],
          quantity: 1,
        },
      ],
    };
    const product = {
      id: 1,
      title: "Product A",
      description: "Desc A",
      photos: [],
    };

    CartPage.mutations.ADD_TO_CART(state, product);

    expect(state.items[0].quantity).toBe(2);
  });

  it("should remove a product from the cart when quantity is 1", () => {
    const state = {
      items: [
        {
          id: 1,
          title: "Product A",
          description: "Desc A",
          photos: [],
          quantity: 1,
        },
      ],
    };

    CartPage.mutations.REMOVE_FROM_CART(state, 1);

    expect(state.items).toHaveLength(0);
  });

  it("should decrement quantity if product exists and quantity > 1", () => {
    const state = {
      items: [
        {
          id: 1,
          title: "Product A",
          description: "Desc A",
          photos: [],
          quantity: 2,
        },
      ],
    };

    CartPage.mutations.REMOVE_FROM_CART(state, 1);

    expect(state.items[0].quantity).toBe(1);
  });
});

describe("CartPage Actions", () => {
  it("should commit ADD_TO_CART mutation", () => {
    const commit = jest.fn();
    const product = {
      id: 1,
      title: "Product A",
      description: "Desc A",
      photos: [],
    };

    CartPage.actions.addToCart({ commit }, product);

    expect(commit).toHaveBeenCalledWith("ADD_TO_CART", product);
  });

  it("should commit REMOVE_FROM_CART mutation", () => {
    const commit = jest.fn();
    const productId = 1;

    CartPage.actions.removeFromCart({ commit }, productId);

    expect(commit).toHaveBeenCalledWith("REMOVE_FROM_CART", productId);
  });
});

describe("CartPage Getters", () => {
  it("should return all cart items", () => {
    const state = {
      items: [
        {
          id: 1,
          title: "Product A",
          description: "Desc A",
          photos: [],
          quantity: 1,
        },
      ],
    };

    const result = CartPage.getters.cartItems(state);

    expect(result).toEqual(state.items);
  });

  it("should calculate total items in the cart", () => {
    const state = {
      items: [
        {
          id: 1,
          title: "Product A",
          description: "Desc A",
          photos: [],
          quantity: 2,
        },
        {
          id: 2,
          title: "Product B",
          description: "Desc B",
          photos: [],
          quantity: 3,
        },
      ],
    };

    const result = CartPage.getters.totalItems(state);

    expect(result).toBe(5);
  });
});
