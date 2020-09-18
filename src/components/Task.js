import React, { useState } from "react";

export default function Task({ task }) {
  const [desc, showDesc] = useState(false);
  return (
    <div className="task">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{task.title}</h3>
        <div className="task-action">
          <button
            className="task-action-button detail"
            onClick={() => showDesc(!desc)}
          ></button>
          <button className="task-action-button edit"></button>
          <button
            className="task-action-button delete"
            value={task._id}
          ></button>
        </div>
      </div>
      {desc ? <p>{task.description}</p> : null}
    </div>
  );
}
