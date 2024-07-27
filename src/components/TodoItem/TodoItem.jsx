import DeleteButton from "./components/DeleteButton/DeleteButton";
import ToggleCheckBox from "./components/ToggleCheckBox";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={styles.todoCard}>
      <div className={styles.flexDiv}>
        <ToggleCheckBox
          checked={todo.completed}
          onToggle={onToggle}
          id={todo.id}
        />
        <p className={todo.completed ? styles.completed : ""}>{todo.todo}</p>
      </div>
      <DeleteButton onDelete={onDelete} id={todo.id} />
    </div>
  );
};

export default TodoItem;
