import React from 'react'

function SingleSelect({title}) {
  return (
    <div className='flex flex-col gap-y-3'>
      <span>{title}</span>
      <select name="" id="" className='rounded-full border-slate-500 border-1 border-none ring-1 ring-gray-300 focus:ring-gray-400' >
        <option value="">Addis Ababa</option>
        <option value="">Addis Ababa</option>
        <option value="">Addis Ababa</option>
        <option value="">Addis Ababa</option>
        <option value="">Addis Ababa</option>
        <option value="">Addis Ababa</option>
      </select>
    </div>
  )
}

export default SingleSelect
