import { faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function SocialIcon({icon}) {
  return (
    <a href="">
      <span className=' hover:bg-greenish hover:text-white rounded-full p-2 px-3 cursor-pointer transition-all duration-200' >
        <FontAwesomeIcon icon={icon} className=''/>
      </span>
    </a>
  )
}

export default SocialIcon
