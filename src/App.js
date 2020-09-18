import React, { useState } from "react";
import "./App.css";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  const [addNew, setAddNew] = useState(false);
  const addNewHandler = () => setAddNew(!addNew);

  return (
    <div className="app">
      <div className="navbar">
        <span style={{ color: "white", fontSize: "50px" }}>NjayTracker</span>
        <div className="navmenu">
          <button>All</button>
          <button>Remaining</button>
          <button>Completed</button>
          {addNew ? (
            <button onClick={addNewHandler}>Cancel</button>
          ) : (
            <button onClick={addNewHandler}>Add new</button>
          )}
        </div>
      </div>
      {addNew ? <AddTasks addNewHandler={() => addNewHandler()} /> : <Tasks />}
    </div>
  );
}

export default App;
