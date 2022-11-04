import React, {useState} from "react";

function Task({task}) {
  const [vis, setVis] = useState(true)

  const handleDelete = () => {
    setVis(!vis)
  }

  return (
    vis ?
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
    :
    null
  )
}

export default Task;
