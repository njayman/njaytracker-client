import React, { useState, useEffect } from "react";
import Task from "./Task";
import axios from "axios";
export default function Tasks() {
  const [tasks, setTasks] = useState();
  const getTasks = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_NOT_AXIOS_BASE_URL}/api/tasks`
    );
    setTasks(data);
  };
  useEffect(() => {
    getTasks();
    return;
  });
  return (
    <div className="task-container">
      {tasks?.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </div>
  );
}
