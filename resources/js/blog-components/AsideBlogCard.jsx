import React from 'react'
import pp from '../../../public/images/pp1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

function AsideBlogCard() {
  return (
    <div className='flex gap-x-3 rounded-xl overflow-hidden border-t pt-4 border-b'>
      <div style={{backgroundImage: `url('${pp}')`}} className='w-[50%] h-[80px] rounded-xl bg-cover bg-center'></div>
      <div>
        <p className=' line-clamp-3 font-semibold pb-'>Stop using old-fashioned closures in modern PHP. There are 4* ways to replace them.</p>
        <div className='text-xs py-3 flex items-center gap-x-3'>
          <FontAwesomeIcon icon={faClock} className='text-greenish'/>
          <span>Jan 05, 2024</span>
        </div>
      </div>
    </div>
  )
}

export default AsideBlogCard
