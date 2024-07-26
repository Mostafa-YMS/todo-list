import { memo, useState } from "react";
import AddTodoModal from "./components/AddTodoModal/AddTodoModal";
import styles from "./AddTodo.module.css";

const AddTodo = memo(({ onAddTodo }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className={styles.addButton} onClick={handleAddClick}>
        Add Todo
      </button>
      {showModal && (
        <AddTodoModal onClose={handleCloseModal} onAddTodo={onAddTodo} />
      )}
    </>
  );
});

export default AddTodo;
