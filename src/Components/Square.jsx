import React from 'react'

export default function Square() {
  return (
    <div className='p-5 rounded-lg shadow-md w-max md:w-auto'>
        <div className="img">
            <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__" alt="" className='w-1/2 my-6 mx-auto' />
        </div>
        <div className="tags flex gap-3">
            <span className='bg-slate-100 text-xs text-blue-500 py-1 px-2 rounded-lg'>20% Off</span>
            <span className='bg-slate-100 text-xs text-blue-500 py-1 px-2 rounded-lg'>Limited Time</span>
            {/* <span></span> */}
        </div>
        <div className="data">
            <p className='my-2'>Computer Modern Classic with wix support</p>
            <div className="flex gap-3 items-end">
                <p className="price text-xl">$999</p>
                <p className="lessprice opacity-75 text-sm">$999</p>
                <p className='text-sm text-red-500'>20%off</p>
            </div>
        </div>
        <button className='w-full  mt-5 p-3 bg-blue-500 text-white rounded-lg'>View</button>
    </div>
  )
}
