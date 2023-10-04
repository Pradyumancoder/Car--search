import React, { useState } from 'react';

function SearchBar({ onSearchTextChange }) {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    onSearchTextChange(newSearchText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform a search action here if needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative text-gray-600 focus-within:text-gray-400 mt-1.5">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          {/* Add a search icon or button here if needed */}
        </span>
        <input
          type="search"
          name="q"
          className="py-2 text-sm text-black rounded-md pl-10 focus:outline-none focus:bg-white w-[300px] h-[30px]"
          placeholder="Search..."
          autoComplete="on"
          value={searchText}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}

export default SearchBar;
