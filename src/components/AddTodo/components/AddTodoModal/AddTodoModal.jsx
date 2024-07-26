import { memo, useState } from "react";
import styles from "./AddTodoModal.module.css";
import { addTodoService } from "../../../../services/addTodo";

const AddTodoModal = memo(({ onClose, onAddTodo }) => {
  const [todoText, setTodoText] = useState("");
  const [addError, setAddError] = useState();
  const [loading, setLoading] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!todoText) {
      setAddError("Please enter todo text");
      return;
    }
    setLoading(true);
    try {
      const todo = await addTodoService({
        todo: todoText,
        completed: false,
        userId: 5,
      });
      if (todo?.error) {
        setAddError("Something went wrong try again later");
      } else {
        onAddTodo(todo);
        onClose();
      }
    } catch (error) {
      setAddError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {addError && <p className={styles.errorText}>{addError}</p>}
        <form onSubmit={handleSubmit}>
          <input
            className={styles.modalInput}
            type="text"
            value={todoText}
            onChange={(e) => {
              setTodoText(e.target.value);
              addError && setAddError();
            }}
            disabled={loading}
          />
          <button
            className={styles.modalButton}
            type="submit"
            disabled={loading}
          >
            Add
          </button>
          <button
            className={styles.modalButton}
            id="close-btn"
            onClick={onClose}
            disabled={loading}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
});

export default AddTodoModal;
