import React from "react";

const Search = ({title, handleChange}) => {
  return (
    <div class="w-full">
      <input type="text" value={title} onChange={handleChange} class="outline-none bg-gray-300 my-3 py-2 w-full rounded pl-6 lg:flex-1 lg:w-1/2 " />
    </div>

  )
}

export default Search
