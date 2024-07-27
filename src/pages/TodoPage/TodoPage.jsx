import { useCallback, useEffect, useState } from "react";
import { getTodoService } from "../../services/getTodo";
import styles from "./TodoPage.module.css";
import TodoList from "../../components/TodoList/TodoList";
import AddTodo from "../../components/AddTodo/AddTodo";

const TodoPage = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, hasMore: true });

  const getTodo = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const data = await getTodoService({ page });
      setTodos((prev) => (page === 1 ? data.todos : [...prev, ...data.todos]));
      setPagination({ page, hasMore: data?.skip < data?.total - data?.limit });
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMore = useCallback(() => {
    if (pagination?.hasMore && !loading) {
      getTodo(pagination.page + 1);
    }
  }, [pagination, loading, getTodo]);

  useEffect(() => {
    getTodo && getTodo();
  }, [getTodo]);

  const onAddTodo = useCallback(
    (todo) => todo && setTodos((prev) => [todo, ...prev]),
    []
  );

  const onToggle = useCallback(
    (id) =>
      id &&
      setTodos((prev) =>
        prev.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      ),
    []
  );

  const onDelete = useCallback(
    (id) => id && setTodos((prev) => prev.filter((todo) => todo.id !== id)),
    []
  );

  return (
    <div className={styles.container}>
      <div className={styles.addBtnContainer}>
        <AddTodo onAddTodo={onAddTodo} />
      </div>
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
      <div className={styles.addBtnContainer}>
        <button
          className={styles.loadMoreButton}
          onClick={loadMore}
          disabled={loading || !pagination?.hasMore}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default TodoPage;
