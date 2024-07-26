import styles from "./TodoItem.module.css";

const TodoItem = ({ todo }) => {
  return (
    <div className={styles.todoCard}>
      <p>{todo.todo}</p>
    </div>
  );
};

export default TodoItem;
