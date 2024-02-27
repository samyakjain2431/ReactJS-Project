import React, { useState } from 'react'

export default function Wide(props) {
  const [show, setShow] = useState(false)
  const toggleShow = ()=>{
    setShow(!show)
  }
  return (
    <div className='text-left my-3 py-8 grid md:grid-cols-4  gap-5 '>
      <span className='md:self-center justify-self-start absolute rounded-full border-2  w-10 flex items-center justify-center h-10'>{props.elem.id}</span>
      <span className={props.elem.tag === 'none'? "hidden" : 'px-8 rounded-md py-2 bg-orange-500 text-white md:justify-self-auto justify-self-end absolute '}>{props.elem.tag}</span>
      <div className="img w-full">
        <img className='md:w-1/2 my-8 mx-auto mt-5' src='https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__' alt="" />
      </div>
      <div className="data md:col-span-2 ">
        <p className=' text-justify md:text-left'><strong className=''>{props.elem.title}</strong> - {props.elem.mainDescription}</p>
        <strong>Main Highlight</strong>
        <p className='md:ml-4  text-justify md:text-left'>{props.elem.moreDescription}</p>
        <p className={show? `block`: `hidden`}>{props.elem.moreDescription}</p>
        <p className='text-blue-500' onClick={toggleShow}>{show? 'show less':'show more'}</p>
      </div>
      <div className="more w-full px-3 justify-self-center">
        <div className="box mb-5 w-full md:w-min  rounded-md bg-blue-100 px-5 py-2  mx-auto flex flex-col justify-center items-center">
            <p className='text-xl'>{props.elem.rating}</p>
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
  )
}
