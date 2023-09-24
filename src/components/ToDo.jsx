import React, { useState } from "react";

function Todo({ task }) {
  const [completed, setCompleted] = useState(false);

  const handleToggle = () => {
    setCompleted(!completed);
  };

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {task}
      </span>
    </div>
  );
}

export default Todo;
