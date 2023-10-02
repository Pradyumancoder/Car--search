import React, { useState } from 'react';

function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform your search operation here with the searchText value
    console.log('Search text:', searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative text-gray-600 focus-within:text-gray-400 mt-1.5">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button type="submit" className="p-1 focus:outline-none focus:shadow-outline ml-[250px]">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
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
