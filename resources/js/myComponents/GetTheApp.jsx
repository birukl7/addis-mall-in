import React from 'react'

function GetTheApp({googleBadge, iphoneBadge, img}) {
  return (
    <>
      <section  className='bg-yellowish md:h-[500px] md:mt-20 px-5  mt-36 ' >
        <div className='max-w-[1200px] py-10 mx-auto'>

          <div className='flex md:flex-row flex-col items-center justify-between gap-x-10 text-white relative'>
            <div className='order-2'>
              <h2 className='text-5xl pt-20 '>Get the App</h2>
              <p className='p-4 text-xl'>Download the app</p>
              <div className='flex items-center md:flex-row flex-col'>
                <img src={googleBadge} alt="" className='w-44' />
                <img src={iphoneBadge} alt="" className='w-44' />
              </div>
            </div>

            <img src={img} alt="" className='w-[80%] md:w-[45%] md:absolute static  md:right-0 md:-top-[60px] order-1 -mt-28 md:mt-0' />
            
            
          </div>
        </div>
      </section>
    </>
  )
}

export default GetTheApp
