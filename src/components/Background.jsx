import React from 'react'

function Background() {
  return (
    <>
      <div className='fixed z-[2] w-full h-screen'>
        <div className='absolute py-10 text-xl text-red-100 w-full text-center semibold tracking-tight '   > Documents</div>
        <h1 className='text-[10vw] text-red-100 absolute top-1/2 left-1/2 semibold -translate-x-[50%] -translate-y-[50%] tracking-tight ' >Docs..</h1>
      </div>
        
    </>
  )
}

export default Background