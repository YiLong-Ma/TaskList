export default function Todo({ task, toggleFinish, deleteTask }) {
  return (
    <div className="work">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleFinish(task)}
        />
        <span>{task.title}</span>
      </div>

      <div>
        <button onClick={() => deleteTask(task)}>remove</button>
      </div>
    </div>
  );
}
