import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [detailsInput, setDetailsInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("Code")
  const [filter, setFilter] = useState("All")

  const onTaskFormSubmit = (newTask) => {
    setTasks([...TASKS, newTask])
  }

  let filteredTasks = []

  if (filter === "All") {
    filteredTasks = tasks
  } else {
    filteredTasks = tasks.filter((task) => {
      if (task.category === filter) {
        return true
      }
    })
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        filter={filter}
        setFilter={setFilter}
      />
      <NewTaskForm 
        categories={CATEGORIES}
        detailsInput={detailsInput}
        categoryInput={categoryInput}
        setDetailsInput={setDetailsInput}
        setCategoryInput={setCategoryInput}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList categories={CATEGORIES} tasks={filteredTasks} />
    </div>
  );
}

export default App;
