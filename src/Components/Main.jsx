import React from 'react'
import Wide from './Wide'
import { Data } from './Data'
import Square from './Square'

function Main() {
  return (
    <div>
      

    <div className='max-w-[1300px] mx-auto px-6 text-left '>
      <section className="upper-area text-left">
        <h1 className='text-[30px] my-5'>Best Website builders in the US</h1>
        <hr />
        <div className="flex text-xs opacity-50 items-center py-1   justify-between">
          <div className="flex gap-5 ">
            <span>Last Updated . February 22, 2020</span>
            <span>Advertising Disclosure</span>
          </div>
          <select name="sorting" id="sorting"  className='float-right  rounded-md px-2 py-1'>
              <option value="relevance" >Top Relevent</option>
              <option value="alphabetical" >A to Z</option>
              <option value="reverseAlpha" >Z to A</option>
              <option value="decPrice" >Highest to Lowest</option>
              <option value="incPrice" >Lowest to Highest</option>
            </select>
        </div>
        <hr />
        <ul className='grid grid-cols-8 gap-3 my-2 items-center opacity-750 text-xs '>
          
          <li className='p-3 '>Tools</li>
          <li className='p-3 '>AWS Builder</li>
          <li className='p-3 '>Start Build</li>
          <li className='p-3 '>Build Supplies</li>
          <li className='p-3 '>Tooling</li>
          <li className='p-3 '>BlueHosting</li>
          {/* <li className='p-3 '>Tools</li> */}
        </ul>
        <p className='text-sm opacity-75 md:whitespace-pre'>{`Home  >  Hosting for all  >  Hosting  >  Hosting6  >  Hosting5`}</p>
      </section>
      <section className="items">
        {
          Data && Data.map ((elem) =>{
            return(
              <Wide key={elem.id} elem = {elem}/>

            )
          })
        }
        
      </section>

      <section className='moreItems my-3 '>
        <h2 className='text-2xl my-10'>Related Deals You Might Like</h2>
        <div className='flex items-center md:flex-row flex-col gap-3 md:justify-evenly  '>
          
        <Square/>
        <Square/>
        <Square/>
        </div>
      </section>
      <section className="signup md:flex
       justify-between items-center my-10 ">
        <p className="text-2xl md:w-max my-5">Sign up and get special exclusive deals </p>

          <div className='flex justify-center items-center border rounded-lg'>
            <input type="text" name="email" id="email" className='p-3 w-full rounded-l-lg' placeholder='enter email' />
            <button type="submit"> <i className=" text-white bg-blue-500 p-4  w-20 rounded-r-lg fa fa-search" /></button>
          </div>
      </section>
    </div>
    </div>
  )
}

export default Main