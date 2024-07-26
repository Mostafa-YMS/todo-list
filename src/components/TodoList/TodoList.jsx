import { useCallback, useEffect, useState } from "react";
import { getTodoService } from "../../services/getTodo";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, hasMore: true });

  const getTodo = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const data = await getTodoService({ page });
      setTodos((prev) => [...prev, ...data.todos]);
      setPagination({ page, hasMore: data?.skip < data?.total - data?.limit });
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const onScroll = useCallback(
    (e) => {
      if (loading) return;
      const { scrollHeight, scrollTop, clientHeight } = e.target;
      if (
        scrollTop + clientHeight + 50 >= scrollHeight &&
        pagination["hasMore"] === true
      ) {
        getTodo(pagination.page + 1);
      }
    },
    [pagination, loading, getTodo]
  );

  useEffect(() => {
    getTodo && getTodo();
  }, [getTodo]);

  return (
    <>
      <div className={styles.container} onScroll={onScroll}>
        <div className={styles.todoList}>
          {todos?.map((todo) => (
            <TodoItem key={todo?.id} todo={todo} />
          ))}
          {loading && <div>Loading...</div>}
        </div>
      </div>
    </>
  );
};

export default TodoList;
