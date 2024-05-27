import { faDumbbell, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Amenity({icon1, icon2, icon3, title1, title2, title3}) {
  return (
    <ul className='py-5 flex flex-col gap-y-2'>
      <li className='gap-x-3 flex items-center'><FontAwesomeIcon icon={icon1} className='text-greenish' />{title1}</li>
      <li className='gap-x-3 flex items-center'><FontAwesomeIcon icon={icon2} className='text-greenish' />{title2}</li>
      <li className='gap-x-3 flex items-center'><FontAwesomeIcon icon={icon3} className='text-greenish' />{title3}</li>
    </ul>
  )
}

export default Amenity
