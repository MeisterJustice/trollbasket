import { loadProductsSuccess, LOAD_PRODUCTS } from "../actions/products";
import productsMiddleware from "./products";

describe("products middleware", () => {
  describe("load products flow", () => {
    const [loadProductsFlow] = productsMiddleware;

    const dummyProduct = {
      id: "1234ads421egjdsc",
      name: "NIKE Huararche 2019",
      description:
        "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
      image: "some_image_path",
      price: "45,000 - 90,000",
      location: "Lagos",
      stock: 5,
    };
    const api = {
      products: {
        getAll: jest
          .fn()
          .mockImplementationOnce(
            () => new Promise((resolve) => resolve([dummyProduct]))
          ),
      },
    };
    const dispatch = jest.fn();
    const next = jest.fn();
    const action = {
      type: LOAD_PRODUCTS,
    };

    it("passes action to next middleware", async () => {
      await loadProductsFlow({ api })({ dispatch })(next)(action);

      expect(next).toHaveBeenCalledWith(action);
    });

    it("calls api.products.getAll at least once", async () => {
      await loadProductsFlow({ api })({ dispatch })(next)(action);

      expect(api.products.getAll).toHaveBeenCalled();
    });

    it("calls api.products.getAll at least once", async () => {
      await loadProductsFlow({ api })({ dispatch })(next)(action);

      expect(dispatch).toHaveBeenCalledWith(
        loadProductsSuccess([dummyProduct])
      );
    });
  });
});
