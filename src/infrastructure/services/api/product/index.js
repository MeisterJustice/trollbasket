import dummyProducts from "../../../../data/products_dummy_data";

export default {
  get: async (id) => {
    const response = dummyProducts.filter((product) => product.id === id);

    return response.data[0];
  },
};
