import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AsideBlogCard from './AsideBlogCard'

function AsideBar() {
  return (
    <div>
      <h2 className='text-2xl py-4 font-semibold'>Search Blogs</h2>
      <div className=''>
        <div className='flex'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='p-3 border-l border-t border-b border-slate-400' />
          <input type="search" name="" id=""  className='w-full'/>
          <button className='bg-yellowish px-3 text-white '>Search</button>
        </div>

        <h3 className='py-4 text-xl font-semibold'>Latest Posts</h3>

        <div>
          <AsideBlogCard />
          <AsideBlogCard />
          <AsideBlogCard />
          <AsideBlogCard />
          <AsideBlogCard />

        </div>
      </div>
    </div>
  )
}

export default AsideBar
