import { faArrowRight, faDirections, faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function JobCard({image}) {
  return (
    <div className='flex gap-x-3 bg-gray-100 p-3 rounded-lg my-5 outline outline-1 pt-6'>
      <div>
        <img src={image} alt="" className='w-16' />
      </div>
      <div>
        <h3 className='text-xl font-semibold'>Junior UI/UX Designer</h3>
        <span className='text-gray-400'>Slack Technologies, LLC</span>
        <p className=' line-clamp-2 py-2 max-w-[500px]'>We are lookin for a young ralented designer to help us to create stunnig websites and apps. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, officiis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus.</p>
        <div className='flex items-center gap-x-2 p-3 outline outline-1 rounded-lg mb-4 
         hover:bg-greenish hover:text-white cursor-pointer transition-all ease-in-out duration-150 ' >
          <FontAwesomeIcon icon={faLocation} className='' />
          <span className='underline'>Edna mall</span> 
        </div>
        <div className='flex items-center gap-x-2 p-3 outline outline-1 rounded-lg hover:bg-yellowish hover:text-white cursor-pointer transition-all duration-100 ease-out'>
          <FontAwesomeIcon icon={faDirections} className='' />
          <span className=''>Directions</span>
          <FontAwesomeIcon icon={faArrowRight}  className=' -rotate-45 hover:rotate-0 transition-all duration-200 ease-in-out hover:cursor-pointer'/> 
        </div>

        <div className='flex flex-wrap gap-x-4 gap-y-3 mt-4'>
          <button className='bg-gray-200 text-xs p-2 py-1 rounded-full'>Full Time</button>
          <button className='bg-gray-200 text-xs p-2 py-1 rounded-full'>Laravel</button>
        </div>
      </div>
    </div>
  )
}

export default JobCard
