import React from "react";

function CategoryFilter({categories, filter, setFilter}) {
  
  const handleClick = (e) => {
    setFilter(e.target.value)
    e.target.className = "selected"
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return <button
                  key={category}
                  value={category}
                  className={category !== filter ? "" : "selected"}
                  onClick={handleClick}
                >
                  {category}
                </button>})}
    </div>
  );
}

export default CategoryFilter;
