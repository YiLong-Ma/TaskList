import { useRef, useState } from "react";
import Assigned from "./components/Assigned";
import List from "./components/List";
import "./styles.css";

const tasks = [];
export default function App() {
  const [assign, setAssign] = useState(tasks);
  const todoRef = useRef(0);
  function toggleFinish(task) {
    const updatedTodos = assign.map((assign) => {
      if (assign.id === task.id) {
        return {
          ...assign,
          title: <del>{assign.title}</del>,
          completed: !assign.completed
        };
      } else {
        return assign;
      }
    });
    setAssign((prev) => updatedTodos);
  }
  function deleteTask(task) {
    const updatedTasks = assign.filter((assign) => assign.id !== task.id);
    setAssign((prev) => updatedTasks);
  }
  function addTask(title) {
    if (title) {
      todoRef.current += 1;
      const task = {
        id: todoRef.current,
        title: title,
        completed: false
      };
      setAssign((assign) => [...assign, task]);
    }
  }
  return (
    <div className="App">
      <h1>List</h1>
      <List addTodo={addTask} />
      <Assigned
        data={assign}
        toggleFinish={toggleFinish}
        deleteTask={deleteTask}
      />
    </div>
  );
}
