import axios from "axios";

export const addTodoService = async (todo) => {
  try {
    const { data } = await axios.post("https://dummyjson.com/todos/add", todo);
    return data;
  } catch (error) {
    return { error };
  }
};
