import { memo, useCallback, useState } from "react";
import { editTodoService } from "../../../services/editTodo";

const ToggleCheckBox = memo(({ checked, onToggle, id }) => {
  const [loading, setLoading] = useState(false);

  const onChange = useCallback(async () => {
    setLoading(true);
    try {
      const todo = await editTodoService({
        id,
        updatedData: { completed: !checked },
      });
      if (!todo?.error) onToggle(id);
    } catch (error) {
      console.error("error");
    } finally {
      setLoading(false);
    }
  }, [onToggle, id, checked]);

  return (
    <input
      disabled={loading}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
});

export default ToggleCheckBox;
