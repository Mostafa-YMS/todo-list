import { memo } from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = memo(({ todos, onToggle, onDelete }) => {
  return (
    <div className={styles.todoList}>
      {todos?.map((todo) => (
        <TodoItem
          key={todo?.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
});

export default TodoList;
