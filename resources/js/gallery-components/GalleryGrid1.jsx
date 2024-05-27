import React from 'react'
import GalleyG1Big from './GalleyG1Big'
import GalleyG1Small from './GalleyG1Small'

function GalleryGrid1({object}) {
  return (
  <div className='grid md:grid-cols-3 gap-x-5 gap-y-7'>
    <div className='grid grid-cols-1 gap-y-7'>
      <GalleyG1Big img={object.img1} person={object.person1} />
      <GalleyG1Small img={object.img1} person={object.person1} />
    </div>

    <div className='grid grid-cols-1 gap-y-7'>
      <GalleyG1Small img={object.img1} person={object.person1} />
      <GalleyG1Big img={object.img1} person={object.person1} />
    </div>

    <div className='grid grid-cols-1 gap-y-7'>
      <GalleyG1Big img={object.img1} person={object.person1} />
      <GalleyG1Small img={object.img1} person={object.person1} />
    </div>

  </div>
  )
}

export default GalleryGrid1
