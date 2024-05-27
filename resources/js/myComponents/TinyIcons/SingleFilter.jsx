import React from 'react'

function SingleFilter({title}) {
  return (
    <div className='flex flex-col gap-y-3'>
      <span>{title}</span>
      <input type="search" name="" id="" className='rounded-full border-slate-500 border-1 border-none ring-1 ring-gray-300 focus:ring-gray-400' />
    </div>
  )
}

export default SingleFilter