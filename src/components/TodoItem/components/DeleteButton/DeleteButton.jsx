import { useCallback, useState } from "react";
import styles from "./DeleteButton.module.css";
import { deleteTodoService } from "../../../../services/deleteTodo";

const DeleteButton = ({ onDelete, id }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = useCallback(async () => {
    setLoading(true);
    try {
      const todo = await deleteTodoService(id);
      if (!todo?.error) onDelete(id);
    } catch (error) {
      console.error("error");
    } finally {
      setLoading(false);
    }
  }, [onDelete, id]);

  return (
    <button
      disabled={loading}
      className={styles.deleteButton}
      onClick={handleDelete}
    >
      delete
    </button>
  );
};

export default DeleteButton;
