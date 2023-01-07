import { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName);
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          name="message"
          placeholder="Enter new task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary">Save Task</button>
      </div>
    </form>
  );
};
