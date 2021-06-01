import dummyProducts from "../../../../data/products_dummy_data";

export default {
  getAll: async () => {
    const response = dummyProducts;

    return response.data;
  },
};
