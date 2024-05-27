import React from 'react'

function FooterCard({title}) {
  return (
    <div className='py-4'>
      <h4 className='text-2xl py-2 font-semibold'>{title}</h4>
      <ul className='pl-3 md:pl-0'>
        <li> <a href="#" className='hover:underline'>Home</a></li>
        <li> <a href="#" className='hover:underline'>Accomodation</a></li>
        <li><a href="#" className='hover:underline'>Gallery</a> </li>
        <li><a href="#" className='hover:underline'>Blog</a> </li>
        <li><a href="#" className='hover:underline'>Contact</a> </li>
      </ul>
    </div>
  )
}

export default FooterCard
