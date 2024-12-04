import { useState, Component, useRef } from "react";
import { MdDeleteForever } from "react-icons/md";

const TodoInput = () => {
  const [msg, setMsg] = useState("");
  const [todos, setTodos] = useState([]);
  // const [completed, setCompleted] = useState(true);

  const addTodo = (e) => {
    if ((e.key === "Enter" && msg.trim()) || e.type === "click") {
      setTodos([...todos, { msg, completed: false }]);
      setMsg("");
    }
  };
  const handleInputChange = (e) => {
    setMsg(e.target.value);
  };

  const toggleTodo = (index) => {
    // setCompleted(!completed);
    // const newTodos = [...todos];
    // newTodos[index].completed = completed;
    // setTodos(newTodos);
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="todo"
        onChange={handleInputChange}
        onKeyDown={addTodo}
        value={msg}
      />
      <button onClick={addTodo}>Add</button>
      <ol>
        {todos.length > 0 ? (todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            {todo.msg}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                toggleTodo(index);
                console.log(todo.completed);
              }}
            />
            <button onClick={() => removeTodo(index)}>
              <MdDeleteForever className="icons" />
            </button>
          </li>
        ))) : <p>No todos ... imposible?</p>}
      </ol>
    </div>
  );
};

export default TodoInput;
