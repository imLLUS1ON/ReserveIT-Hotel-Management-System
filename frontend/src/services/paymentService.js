import api from "../utils/axiosClient";

export const createOrder = async (amount) => {
  const response = await api.post("/payment/create-order", { amount });
  return response.data;
};
