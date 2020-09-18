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
        <button className="class-detail-button" onClick={() => showDesc(!desc)}>
          Show Detail
        </button>
      </div>
      {desc ? <p>{task.description}</p> : null}
    </div>
  );
}
