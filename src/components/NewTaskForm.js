import React from "react";

function NewTaskForm({categories,
                      detailsInput,
                      categoryInput,
                      setDetailsInput,
                      setCategoryInput,
                      onTaskFormSubmit}) {
  
  const handleDetails = (e) => {
    setDetailsInput(e.target.value)
  }

  const handleCategory = (e) => {
    setCategoryInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      text: detailsInput,
      category: categoryInput,
    }
    onTaskFormSubmit(newItem)
    setDetailsInput("")
    setCategoryInput("Code")
  }
    
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={detailsInput} onChange={handleDetails} />
      </label>
      <label>
        Category
        <select name="category" value={categoryInput} onChange={handleCategory}>
          {categories.map(category => {
            if (category !== "All") {
            return <option key={category} value={category}>{category}</option>
          }})}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
