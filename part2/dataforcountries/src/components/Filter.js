import React from "react";

const Filter = ({filter, setFilter, text }) => {
  const handleFilterChange = (event) => setFilter(event.target.value)
  return(
    <div>
    {text} <input
      name='filter'
      value={filter}
      onChange={handleFilterChange} />
    </div>
  )
}

export default Filter