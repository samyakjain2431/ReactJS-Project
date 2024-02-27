import React from 'react'

function Footer() {
  return (
    <div className='bg-slate-800 text-white text-left p-8'>
      <div className="max-w-[1600px] opacity-75 grid gap-16 grid-cols-1  md:grid-cols-4 ">
        <div className="categories md:justify-self-end w-max">
          <p className="text-xl">Categories</p>
          <p className='text-sm my-3 opacity-75'>Web Builder</p>
          <p className='text-sm my-3 opacity-75'>Hosting</p>
          <p className='text-sm my-3 opacity-75'>Data Center</p>
          <p className='text-sm my-3 opacity-75'>Robotic - Automation</p>
        </div>
        <div className="categories md:justify-self-center w-max">
          <p className="text-xl">Contact</p>
          <p className='text-sm my-3 opacity-75'>Contact</p>
          <p className='text-sm my-3 opacity-75'>Privacy Policy</p>
          <p className='text-sm my-3 opacity-75'>Terms Of Service</p>
          <p className='text-sm my-3 opacity-75'>Categories</p>
          <p className='text-sm my-3 opacity-75'>About</p>
        </div>
        <div className="grid-span-2 md:justify-self-center self-center">
          <select name="country" id="country" className='bg-slate-800'>
            <option value="United States">United States</option>
            <option value="India">India</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Footer