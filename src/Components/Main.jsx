import React from 'react'

function Main() {
  return (
    <div>

    <div className='max-w-[1000px] mx-auto px-6 '>
      <section className="upper-area text-left">
        <h1 className='text-[30px]'>Best Website builders in the US</h1>
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
        <p className='text-sm opacity-75 whitespace-pre'>{`Home  >  Hosting for all  >  Hosting  >  Hosting6  >  Hosting5`}</p>
      </section>
      <section className="items">
        <wideElement/>
      </section>
    </div>
    </div>
  )
}

export default Main