import Work from "./Work";

export default function Assigned(props) {
  return (
    <div>
      {props.data.map((work) => (
        <Work
          key={work.id}
          task={work}
          toggleFinish={props.toggleFinish}
          deleteTask={props.deleteTask}
        />
      ))}
    </div>
  );
}
