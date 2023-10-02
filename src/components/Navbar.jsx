import React from 'react'
import SearchBar from './SearchBar'


function Navbar() {
  return (
    <div>
      <div className='h-[45px] w-[90%] border  bg-[#EDEFF6] shadow-md m-auto'>

        <div className='flex h-[40px] w-[500px]  gap-5 ml-[50px] '>
          <div className='mt-[3]'>
           <SearchBar/>
          </div>

          <div>

            <select className='mt-2 bg-[#EDEFF6]'>
              <option value="1">Relevance</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
              <option value="6">Six</option>
              <option value="7">Seven</option>
              <option value="8">Eight</option>
            </select>
          </div>

          <div>

            <select className='mt-2 bg-[#EDEFF6]'>
              <option value="1">All brands</option>
              <option value="2">TOyota</option>
              <option value="3">BMW3</option>
              <option value="4">Cadilac</option>
              <option value="5">BMW4</option>
              <option value="6">Six</option>
              <option value="7">Safari</option>
              <option value="8">Maruti</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
