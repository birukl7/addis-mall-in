import React from 'react'
import addis from '../../../public/images/addis.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function JobGrid({height}) {
  return (
    <div style={{backgroundImage: `url('${addis}')`}} className={`h-[${height}] bg-center bg-cover rounded-xl text-white p-5 relative`}>
      <p className='text-xl '>Century Mall</p>
      <div className='flex absolute items-center justify-between bottom-0  right-0 left-0 p-5 px-8'>
        <p className='flex flex-col text-xs'><span>5+ Vacancy</span>
        <span>6+ Free Spaces</span></p>
        <FontAwesomeIcon icon={faArrowRight} className='-rotate-45 hover:rotate-0 transition-all duration-100 ease-linear hover:cursor-pointer' />
      </div>
    </div>
  )
}

export default JobGrid
