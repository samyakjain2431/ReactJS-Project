import React from 'react'
import Wide from './Wide'
import { Data } from './Data'
import Square from './Square'

function Main() {
  const data = {
    id: 3,
    title: "Trend-Setting Fashionable Backpack: Your Ultimate Companion for Style & Function",
    mainDescription: "Elevate your accessory game with our Trend-Setting Fashionable Backpack. This isn't just any backpack; it's a statement of style while offering ample space and organization for all your essentials.",
    moreDescription: "This trendy backpack merges fashion-forward design with practicality, making it perfect for your daily commute or next adventure. Crafted with the modern individual in mind, it features durable materials, a comfortable fit, and compartments designed to keep your belongings organized. Whether you're headed to work, school, or on a trip, this backpack will ensure you stand out for all the right reasons.",
    tag: "none",
    imageUrl: "https://example.com/fashionable-backpack.jpg",
    rating: 7.4,
    extraTag : '26% Off'
  }

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
          <div className='text-left my-3 py-8 grid md:grid-cols-4  gap-5 '>
      <span className='md:self-center justify-self-start absolute rounded-full border-2  w-10 flex items-center justify-center h-10'>4</span>
          
      <div className="img w-full">
        <img className='md:w-1/2 my-8 mx-auto mt-5' src='https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__' alt="" />
      </div>
      <div className="data md:col-span-2 ">
        <p className=' text-justify md:text-left'><strong className=''>Trend-Setting Fashionable Backpack: Your Ultimate Companion for Style & Function</strong> - Eletvate your accessory game with our Trend-Setting Fashionable Backpack. This isn't just any backpack; it's a statement of style while offering ample space and organization for all your essentials.</p>
        <strong>Main Highlight</strong>
        <p className='md:ml-4 p-3 rounded-lg  text-justify md:text-left bg-orange-100'>
          <ul>
            <li className='my-1'> <span className='px-1 rounded-sm bg-white'>9.9</span> Building Responsiveness</li>
            <li className='my-1'> <span className='px-1 rounded-sm bg-white'>8.9</span> Cool</li>
            <li className='my-1'> <span className='px-1 rounded-sm bg-white'>9.9</span> Docs</li>
          </ul>
        </p>
        <div >
         <p className='my-2'> Why we love it</p>
          <ul>
            <li><span><i className=" text-blue-500 bg-blue-100 p-1 rounded-full fa fa-check "/></span> Documentation</li>
            <li><span><i className=" text-blue-500 bg-blue-100 p-1 rounded-full fa fa-check "/></span> Easy To Use</li>
            <li><span><i className=" text-blue-500 bg-blue-100 p-1 rounded-full fa fa-check "/></span> Out Of Box</li>
          </ul>
        </div>
        
      </div>
      <div className="more w-full px-3 flex justify-between flex-col">
        <div className="box mb-5 w-full md:w-min  rounded-md bg-blue-100 px-5 py-2  mx-auto flex flex-col justify-center items-center">
            <p className='text-xl'>9.5</p>
            <p className='text-xs my-2 '>Exceptional</p>
            <div className='text-xs flex p gap-1'>
            <span className="fa fa-star text-yellow-500"></span>
            <span className="fa fa-star text-yellow-500"></span>
            <span className="fa fa-star text-yellow-500"></span>
            <span className="fa fa-star text-yellow-500"></span>
            <span className="fa fa-star checked"></span>

            </div>
        </div>
        <button className='block w-36 mx-auto bg-blue-300 py-2 rounded-lg'>View</button>
      </div>
      
    </div>
        
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