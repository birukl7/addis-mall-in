import React from 'react'
import article from '../../../public/images/addis.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

function ArticleCard() {
  return (
    <div className='shadow-2xl rounded-xl hover:-translate-y-3 transition-all duration-200 ease-in-out'>
      <div className='rounded-xl overflow-hidden'>
        <img src={article} alt="" />
      </div>

      <div className='mb-5'>
        <div className='py-2'>
          <span className='px-4 text-slate-500 underline'>FOOD</span> 
          <span className=' text-slate-500 underline'>ADDIS</span>
        </div>

        <a href="/blogs">
          <p className='px-7 max-w-[300px] font-semibold'>The 8 Most Affordable Shops in Addis Ababa.</p>
        </a>
        
        
      </div>
      <div className='px-8 pb-5 flex gap-x-10'>
        <span className='flex items-center gap-x-2'>
          <FontAwesomeIcon icon={faThumbsUp} className='text-slate-600'/>
          <span>2</span>
        </span>
        {/* <span>
          <FontAwesomeIcon icon={faThumbsDown} className=''/>
          <span>2</span>
        </span> */}

      </div>



    </div>
  )
}

export default ArticleCard
