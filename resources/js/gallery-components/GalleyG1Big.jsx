import React from 'react'

function GalleyG1Big({img, person}) {
  return (
  <div className='rounded-xl overflow-hidden bg-cover bg-center h-[450px] px-4 text-white relative' style={{backgroundImage: `url('${img}')`}}>
    <div className='absolute bottom-0 p-3 pb-5'>
      <p>By {person}</p>
      <div className='flex gap-x-3 py-1'>
        <div className='text-xs bg-[#1f4961] rounded-full p-[1.25px] px-[5px] pr-[12px]'>
          <span>❤️</span>
          <span>3</span>
        </div>
        <div className='text-xs bg-[#1f4961] rounded-full p-[1.25px] px-[5px] pr-[12px]'>
          <span>🔥</span>
          <span>6</span>
        </div>
        <div className='text-xs bg-[#1f4961] rounded-full p-[1.25px] px-[5px] pr-[12px]'>
          <span>👍</span>
          <span>16</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default GalleyG1Big
