import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function FIndMalls({icon, title, description}) {
  return (
    <div className='flex items-center gap-x-5 pt-8'>
    <FontAwesomeIcon icon={icon} className='md:text-3xl text-2xl text-yellowish'/>
    <p className=''><span className='md:text-3xl text-2xl font-semibold '>{title}</span> <br />
    {description}
    </p>
  </div>
  )
}

export default FIndMalls
