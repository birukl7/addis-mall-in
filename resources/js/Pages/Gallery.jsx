import GalleryGrid1 from '@/gallery-components/GalleryGrid1'
import Header from '@/myComponents/Header'
import React from 'react'
import img1 from '../../../public/images/addis.jpg'
import GalleryDetail from '@/gallery-components/GalleryDetail'
import GalleryGrid2 from '@/gallery-components/GalleryGrid2'
import GetTheApp from '@/myComponents/GetTheApp'

import google from '../../../public/images/google-play-badge.png'
import rust from '../../../public/images/phone-mpckup.png'
import addis from '../../../public/images/addis.jpg'
import MyFooter from '@/myComponents/MyFooter'

function Gallery() {

  const toggleMenu = ()=>{
    const navlinks = document.querySelector('#navlinks')
    navlinks.classList.toggle('hidden')
  }

  const toggleMenuClose = ()=>{
    const navlinks = document.querySelector('#navlinks')
    navlinks.classList.add('hidden')
  }

  const galleryOb = {
   img1 : img1,
   person1 : 'Biruk Lemma'   
  }

  const renderGalleyDetail = ({})=>{
    return(
      <GalleryDetail />
    )
  }

  

  return (
    <>
      <Header func1={toggleMenu} onclick={toggleMenuClose}/>
      <main onClick={toggleMenuClose}>
        
        {/* <GalleryDetail isHidden={'hidden'}/> */}
        <section className='max-w-[1200px] mx-auto px-5 md:pt-20 pt-5 pb-10'>
          <div>
            <h1 className='text-4xl font-semibold py-5'>Our Gallery</h1>
          </div>
          <GalleryGrid1 object={galleryOb}/>
          <GalleryGrid2 object={galleryOb}/>
        </section>

        <GetTheApp googleBadge={google} iphoneBadge={google} img={rust}/>

        <section className='grid md:grid-cols-5 grid-cols-3 max-w-[1200px] mx-auto gap-x-5 -mb-[120px] pt-[100px] px-3'>

          <div style={{backgroundImage: `url('${addis}')`}} className='bg-cover bg-center h-[200px]'>
          </div>

          <div style={{backgroundImage: `url('${addis}')`}} className='bg-cover bg-center h-[200px]'>
          </div>

          <div style={{backgroundImage: `url('${addis}')`}} className='bg-cover bg-center h-[200px]'>
          </div>

          <div style={{backgroundImage: `url('${addis}')`}} className='bg-cover bg-center h-[200px] md:block hidden'>
          </div>

          <div style={{backgroundImage: `url('${addis}')`}} className='bg-cover bg-center h-[200px] md:block hidden'>
          </div> 

        </section>

        <section className='mt-20'>
        <MyFooter bgColor={'bg-slate-200 pt-20'} youWant={true}/>
        </section>
      </main>


      
    </>
  )
}

export default Gallery
