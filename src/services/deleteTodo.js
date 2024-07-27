import axios from "axios";

export const deleteTodoService = async (id) => {
  try {
    const { data } = await axios.delete(`https://dummyjson.com/todos/${id}`);
    return data;
  } catch (error) {
    return { error };
  }
};
