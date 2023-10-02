import React from 'react'
import Navbar from './Navbar'
import SellarCar from './SellarCar'

function Car() {
  return (
    <div>

      <div className='h-[1000px] w-[100%] border border-black m-auto bg-[#EDEFF6] '>
        <div>
          <Navbar />
        </div>
        
        <div>
           <SellarCar/>
        </div>
      </div>
    </div>
  )

}

export default Car
