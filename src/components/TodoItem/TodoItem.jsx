import ToggleCheckBox from "./components/ToggleCheckBox";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, onToggle }) => {
  return (
    <div className={styles.todoCard}>
      <ToggleCheckBox
        checked={todo.completed}
        onToggle={onToggle}
        id={todo.id}
      />
      <p className={todo.completed ? styles.completed : ""}>{todo.todo}</p>
    </div>
  );
};

export default TodoItem;
