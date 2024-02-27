import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  // console.log(width)

useEffect(() => {
  const changeWidth = () =>{
    setWidth(window.innerWidth)
    }
  window.addEventListener('resize', changeWidth);

  return () => {
    window.removeEventListener('resize', changeWidth)
  }
}, [])

  
  useEffect(() => {
    console.log('now width', width, "and toggle", toggle)

  },[width])
  

  return (
    <div className='bg-slate-800 duration-300'>
      <p onClick={()=>{setToggle(!toggle)}}  className={width<700? 'block text-right p-5 text-white z-1000': 'hidden'}>x</p>       
        <div className={width<700? toggle? 'flex duration-300 flex-col w-full absolute justify-center items-center bg-slate-800 text-white z-10 py-10 ' : 'flex duration-300 flex-col w-full absolute justify-center items-center bg-slate-800 text-white z-10 py-10 -top-[240px]' : "max-w-[1000px] duration-300 mx-auto text-white p-3 flex gap-3 md:gap-16 items-center  justify-center  text-sm "}>
            <input type="text" name="text" id="text" className='text-black p-2 rounded-md' placeholder='Search' />
            <Link className='opacity-75' to={""}>Categories</Link>            
            <Link className='opacity-75' to={""}>Website Builders</Link>            
            <Link className='opacity-75' to={""}>Today's deals</Link>     
        </div>
    </div>
  )
}

export default Navbar