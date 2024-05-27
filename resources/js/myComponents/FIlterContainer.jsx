import React from 'react'
import SingleFilter from './TinyIcons/SingleFilter'
import SingleSelect from './SingleSelect'
import Selector from './Selector'

function FIlterContainer({url}) {
  return (
    <form action="">
    <div className='gap-y-3 md:gap-y-0 grid md:grid-cols-5 sm:grid-cols-4 gap-x-8 p-6 bg-white shadow-2xl -mt-10 rounded-lg'>
      

        <Selector title={'Mall Type'} api={'mall-types'} url={url}/>
        <Selector  title={'Subcity'} api={'addis-ababa-subcities'} url={url}/>
        <Selector title={'Purpose'} api={'mall-purpose'}url={url} />
        <Selector title={'Near Location'} api={'addis-ababa-locations'} url={url} />
        {/* <SingleFilter title={'Subcity'}/> */}
        
        <div>
          <h1 className='mb-8'></h1>
          <button className=' bg-greenish text-white rounded-full px-8 py-3 hover:outline hover:outline-1 hover:text-black hover:bg-transparent transition-all duration-200'>Check Availability</button>
        </div>
        
    </div>
    </form>
  )
}

export default FIlterContainer
