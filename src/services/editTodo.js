import axios from "axios";

export const editTodoService = async ({ updatedData, id }) => {
  try {
    const { data } = await axios.put(
      `https://dummyjson.com/todos/${id}`,
      updatedData
    );
    return data;
  } catch (error) {
    return { error };
  }
};
