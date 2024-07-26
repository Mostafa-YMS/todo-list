import axios from "axios";

export const getTodoService = async ({ page = 1, limit = 12 }) => {
  try {
    const { data } = await axios.get("https://dummyjson.com/todos", {
      params: { skip: (page - 1) * limit, limit },
    });
    return data;
  } catch (error) {
    return { error };
  }
};
