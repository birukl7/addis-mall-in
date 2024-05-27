import { faAddressBook } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function TopCard({name, icon, address}) {
  return (
  <div className='flex gap-x-5 items-center'>
    <FontAwesomeIcon icon={icon} className=' text-greenish text-lg' />
    <div className='flex flex-col text-sm'>
      <span className=''>{name}</span>
      <strong>{address}</strong>
    </div>
  </div>
  )
}

export default TopCard
