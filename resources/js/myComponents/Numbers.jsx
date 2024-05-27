import { faMagnifyingGlass, faPeopleGroup, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

function Numbers() {
  const [counterState, setCounterState] = useState(false)

  return (
    <ScrollTrigger onEnter={()=>setCounterState(true)} onExit={()=>setCounterState(false)}>
    <div className='flex flex-col md:flex-row justify-between md:py-10 '>
        <div className='flex flex-col items-center justify-center  py-4 md:py-0 md:border-r-2 border-r-black px-16 max-w-[150px]'>
          <span className='text-5xl text-greenish'>
            {counterState && <CountUp start={0} end={200} duration={3}/> }
            +
            </span>
          <div className='flex gap-x-2 items-center'>
            <FontAwesomeIcon icon={faShoppingCart} className='text-greenish'/>
            
            <span className='text-xl'>Malls</span>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center  py-4 md:py-0 md:border-r-2 border-r-black px-16 max-w-[150px] pr-28'>
          <span className='text-5xl text-greenish'>
          {
            counterState && <CountUp start={0} end={80} duration={3}/>
          }
          +
            </span>
          <div className='flex gap-x-2 items-center'>
            <FontAwesomeIcon icon={faShoppingCart} className='text-greenish'/>
            <span className='text-xl'>Partners</span>
          </div>
          
        </div>
        <div className='flex flex-col items-center justify-center  py-4 md:py-0 md:border-r-2 border-r-black px-16 max-w-[150px] pr-28'>
          <span className='text-5xl text-greenish'>
            {
              counterState && <CountUp start={0} end={2000} duration={3}/>
            }
          +</span>
          <div className='flex gap-x-2 items-center'>
            <FontAwesomeIcon icon={faShoppingCart} className='text-greenish'/>
            <span className='text-xl'>Shops</span>
          </div>      
        </div>
        <div className='flex flex-col items-center justify-center py-4 md:py-0  md:border-r-2 border-r-black px-16 max-w-[150px] pr-28'>
          <span className='text-5xl text-greenish'>
            {
              counterState && <CountUp start={0} end={3400} duration={3}/>
            }
          +</span>
          <div className='flex gap-x-2 items-center'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-greenish'/>
            <span className='text-xl'>Searchs</span>
          </div>
        </div>
 

    </div>
    </ScrollTrigger>
  )
}

export default Numbers
