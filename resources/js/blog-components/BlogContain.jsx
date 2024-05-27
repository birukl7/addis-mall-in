import React from 'react'
import dog from '../../../public/images/dogpp.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faListDots } from '@fortawesome/free-solid-svg-icons'


function BlogContain() {
  return (
    <div className=' border-b-[0.25px] border-slate-400 pb-2 pt-5'>
      <div className='flex items-center gap-x-4 py-3'>
        <div className='w-[30px] h-[30px] rounded-full bg-center bg-cover' style={{backgroundImage: `url('${dog}')`}}>
        </div>
        <p>Hazel Pradise 	&#183; Mar 27, 2024</p>
      </div>

      <div className='flex items-center'>
        <div>
          <strong className='text-xl font-semibold mb-[100px]'>How I Create Passive Income With No Money</strong>
          <p className=' line-clamp-3 w-full pt-3'>Many ways to start a passive income today - ALways, always start with ZERO money. You won't regret it! I never loved the idea of working 9-5 and receiving money at the end of the month. Well, I used to receive i Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, repellendus soluta illo corrupti at numquam esse sint animi excepturi ipsum quaerat, molestiae consequatur neque optio ab quae, autem dolores assumenda. Obcaecati corporis voluptatum, quasi recusandae illum cum maiores beatae rem voluptatem sequi ipsum quidem debitis maxime fuga reprehenderit laudantium atque amet quam, magni eum odit temporibus sunt. Deserunt, magnam in excepturi, quos eveniet earum officiis tempore impedit rem facere aspernatur. Facilis in similique ab error nihil possimus nobis soluta maiores eius voluptatum incidunt, voluptatem inventore dolor laborum temporibus beatae placeat expedita ad ipsam. Sapiente, esse? Autem at quibusdam eveniet! Dolorum. </p>
        </div>

        <div style={{backgroundImage: `url('${dog}')`}} className='md:w-[300%] w-[900%] ml-10 h-[130px] bg-center bg-cover' >
        </div>
      </div>

      <div className='flex items-center justify-between py-5'>
        <div className='flex items-center gap-x-3'>
          <span className='bg-slate-400 p-2 rounded-full text-xs font-semibold px-3'>Passive Income</span>
          <span className='text-slate-600'>5 min read</span>
        </div>
        <div className='flex items-center gap-x-3 mr-[15px]'>
          <FontAwesomeIcon icon={faBookmark} className='text-greenish p-3'/>
          <FontAwesomeIcon icon={faListDots} className='text-greenish p-3'/>
        </div>
      </div>

    </div>
  )
}

export default BlogContain
