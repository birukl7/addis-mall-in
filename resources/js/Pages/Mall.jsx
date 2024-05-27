import Ddrop from '@/myComponents/Ddrop'
import Header from '@/myComponents/Header'
import MallCard from '@/myComponents/MallCard'

import rating1 from '../../../public/images/ratings/rating-10.png'
import rating05 from '../../../public/images/ratings/rating-35.png'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import FIlterContainer from '@/myComponents/FIlterContainer'
import MyFooter from '@/myComponents/MyFooter'

function Mall() {
  
  const toggleMenu = ()=>{
    const navlinks = document.querySelector('#navlinks')
    navlinks.classList.toggle('hidden')
  }

  const toggleMenuClose = ()=>{
    const navlinks = document.querySelector('#navlinks')
    navlinks.classList.add('hidden')
  }
  
  return (
    <>
     <Header func1={toggleMenu}/>
     <main onClick={toggleMenuClose}>
        {/* <h1 className='max-w-[1100px] mx-auto font-semibold text-3xl py-5'>Mall Lists</h1> */}
        <section className='max-w-[1300px] w-full mx-auto  items-center justify-center px-5 mt-24'  >

          <FIlterContainer/>
        </section>

        <section className='max-w-[1200px] mx-auto mt-12 mb-4 px-5' >

          {/* Main content */}
          <div className='flex justify-between items-center mb-5'>
            <h2 className='font-bold'>Showing Resullts </h2>
            <div>
              <strong>Sort By &nbsp; &nbsp; &nbsp;</strong>
              <Ddrop />
            </div>
          </div>

          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
            <MallCard  rating={rating1} num={1} img={"images/mall-6.jpg"}/>
            <MallCard rating={rating05} num={2} img={"images/mall-3.jpg"}/>
            <MallCard  rating={rating05} img={"images/mall-2.jpg"} />
            <MallCard  rating={rating1} num={1} img={"images/mall-4.jpg"}/>
            <MallCard rating={rating05} num={4} img={"images/mall-7.jpg"}/>
            <MallCard  rating={rating05} img={"images/mall-8.jpg"}/>
            <MallCard  rating={rating1} num={1} img={"images/mall-9.jpg"}/>
            <MallCard rating={rating05} num={6} img={"images/mall-6.jpg"}/>
            <MallCard  rating={rating05}  num={7} img={"images/mall-4.jpg"}/>
            <MallCard  rating={rating05} img={"images/mall-2.jpg"} />
            <MallCard  rating={rating1} num={1} img={"images/mall-4.jpg"}/>
            <MallCard rating={rating05} num={4} img={"images/mall-7.jpg"}/>
          </div>

          {/* pagination */}
          <div className='flex items-center py-2 justify-center mt-20 gap-x-3 text-xs'>
            <FontAwesomeIcon icon={faArrowLeft} className='p-1 outline-1 outline-slate-600  outline rounded-full'/>
            <span className='p-1 outline-1 outline-slate-600  outline rounded-full bg-greenish text-white cursor-pointer'>
              01
            </span>
            <span className='p-1 outline-1 outline-slate-600  outline rounded-full hover:bg-greenish hover:text-white cursor-pointer'>
              02
            </span>
            <span className='p-1 outline-1 outline-slate-600  outline rounded-full hover:bg-greenish hover:text-white cursor-pointer'>
              03
            </span>
            <span className='p-1 outline-1 outline-slate-600  outline rounded-full hover:bg-greenish hover:text-white cursor-pointer'>
              04
            </span>
            <FontAwesomeIcon icon={faArrowRight} className='p-1 outline-1 outline-slate-600  outline rounded-full'/>
          </div>
         
        </section>
        <MyFooter youWant={true}/>
      </main> 
    </>
  )
}

export default Mall
