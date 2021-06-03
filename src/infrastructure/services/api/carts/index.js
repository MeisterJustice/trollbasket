import dummyCarts from "../../../../data/carts_dummy_data";

export default {
  getAll: async () => {
    const response = dummyCarts;
    return response.data;
  },
  post: async (product) => {
    const response = dummyCarts.data;
    let newArray = [...response, { ...product, quantity: 1 }];
    return newArray;
  },
  update: async (id, type) => {
    const cartItems = await localStorage.getItem("rensource_cart");
    const carts = JSON.parse(cartItems);
    let newArray = [...carts];
    let cartIndex = newArray.findIndex((cart) => cart.id === id);
    if (type === "add") {
      newArray[cartIndex].quantity += 1;
    }
    if (type === "minus") {
      newArray[cartIndex].quantity -= 1;
    }

    return newArray;
  },
  delete: async (id) => {
    console.log(id);
    const cartItems = await localStorage.getItem("rensource_cart");
    const carts = JSON.parse(cartItems);
    return carts.filter((cart) => cart.id !== id);
  },
};
