import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-slate-800'>
        <div className="max-w-[1000px] mx-auto text-white p-3 flex gap-16 items-center  justify-center  text-sm ">
            <input type="text" name="text" id="text" className='text-black p-2 rounded-md' placeholder='Search' />
            <Link className='opacity-75' to={""}>Categories</Link>            
            <Link className='opacity-75' to={""}>Website Builders</Link>            
            <Link className='opacity-75' to={""}>Today's deals</Link>            
        </div>
    </div>
  )
}

export default Navbar