import dummyProducts from "../../../../data/products_dummy_data";

export default {
  getAll: async () => {
    const response = dummyProducts;

    return response.data;
  },
  searchByName: async (name) => {
    const response = dummyProducts.data;
    const result = response.filter((product) =>
      product.name.toLowerCase().includes(name)
    );
    return result;
  },
  searchByLocation: async (location) => {
    const response = dummyProducts.data;
    const result = response.filter((product) =>
      product.location.toLowerCase().includes(location)
    );

    return result;
  },
};
