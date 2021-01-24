import React, { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    debugger;
    (async () => {
      setTodos(await axios.get("/todos"));
    })();
  }, []);

  return (
    <div>
      {todos && todos.length == 3 && (
        <span>
        <span className="todo-item">{todos[0]}</span></span>
      )}
    </div>
  );
};
