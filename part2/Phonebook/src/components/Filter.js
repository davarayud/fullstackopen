import React from "react";

const Filter = ({filter, setFilter}) => {
  const handleFilterChange = (event) => setFilter(event.target.value)
  return(
    <div>
    filter show with: <input
      name='filter'
      value={filter}
      onChange={handleFilterChange} />
    </div>
  )
}

export default Filter