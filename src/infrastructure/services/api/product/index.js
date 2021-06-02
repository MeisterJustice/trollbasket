import dummyProducts from "../../../../data/products_dummy_data";

export default {
  get: async (id) => {
    const response = await dummyProducts.data.find(
      (product) => product.id === id
    );
    return response;
  },
};
