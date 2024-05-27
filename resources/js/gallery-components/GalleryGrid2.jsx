import React from 'react'
import GalleyG1Small from './GalleyG1Small'
import GalleyG1Big from './GalleyG1Big'

function GalleryGrid2({object}) {
  return (
    <div>
      <h1 className='text-4xl font-semibold py-10'>Popular Galleries</h1>
      <div className='grid md:grid-cols-3  gap-y-8 md:gap-y-0 gap-x-5'>
        <div className='grid grid-cols-1 gap-y-7'>
          <GalleyG1Small img={object.img1} person={object.person1} />
          <GalleyG1Big img={object.img1} person={object.person1} />
        </div>

        <div className='grid grid-cols-1 gap-y-7'>
          <GalleyG1Big img={object.img1} person={object.person1} />
          <GalleyG1Small img={object.img1} person={object.person1} />
        </div>

        <div className='grid grid-cols-1 gap-y-7'>
          <GalleyG1Small img={object.img1} person={object.person1} />
          <GalleyG1Big img={object.img1} person={object.person1} />
        </div>

      </div>
    </div>
  )
}

export default GalleryGrid2
