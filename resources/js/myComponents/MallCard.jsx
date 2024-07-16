import React from 'react'
import addis from '../../../public/images/addis.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faArrowRight, faBookmark, faCalendar, faInfoCircle, faLocation, faLocationPin, faPerson, faPersonRifle, faShop } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@inertiajs/react';

function MallCard({rating, num, img}) {

  const transition = ' transition-all duration-150 ease-in-out'

  return (
    <div className={`${num%2 === 0 && num >2 ? '-mt-7': ''} ${num%2 === 1 && num >5 ? 'mt-7': ''}`}>
      <div style={{ backgroundImage: `url('${img}')` }} className={`rounded-xl ${num%2 === 0 ? 'h-[320px]': 'h-[400px]'} bg-center  bg-140% hover:bg-150% bg-no-repeat transition-all duration-500 ease-in-out`} >
      </div>

      {/* The cards below each malls */}
      <div className='flex flex-col items-start p-5 bg-white shadow-xl -mt-16 mx-10 rounded-xl px-8 hover:shadow-3xl transition-all duration-200 ease-linear'>
        <a href="/mall-detail">
          <div className='flex items-center justify-start gap-x-2'>
            <img src={rating} alt="" className='w-20 '/>
            <span className='text-xs'>(4.5)</span>
          </div>
        </a>

        <div className='flex'>
          <Link href="/mall-detail">
            <h3 className='font-bold py-2'>White Conpy Tent Near Coastline</h3>
          </Link>
          <div>
            <FontAwesomeIcon icon={faBookmark} className='text-black rounded-sm p-3 outline-none outline-1 text-xs hover:bg-black hover:text-white transition duration-150 ease-in-out cursor-pointer' />
          </div>
        </div>

        <div className='flex gap-x-3 py-2'>
          <FontAwesomeIcon icon={faLocationPin} className=' text-greenish'/>
          <span className='text-xs'>Megenagna Diaspora, Addis Ababa</span>
        </div>

        <div className='flex gap-x-3 py-1  w-full border-b-2 pb-6'>
          <FontAwesomeIcon icon={faInfoCircle} className='text-greenish'/>
          <span className='text-xs font-bold'>Distance from you: <span className='text-yellowish'>12 miles</span></span>
        </div>

        <div className='flex justify-between gap-x-4 items-center'>
          <div className='text-xs gap-3 flex items-center pt-4'>
            <FontAwesomeIcon icon={faShop} className='text-greenish'/>
            <span>28 Shops</span>
          </div>
          <div className='text-xs gap-x-2  flex items-center pt-4'>
            <FontAwesomeIcon icon={faPersonRifle} className='text-greenish'/>
            <span>15</span>
          </div>

          <a href="/mall-detail">
            <div className=' flex gap-x-2 items-center pt-4 font-bold'>
              <span>Details</span>
              <FontAwesomeIcon icon={faArrowRight} className={`-rotate-45 hover:rotate-0 ${transition} `}/>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MallCard
