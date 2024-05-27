import Amenity from '@/mall-detail-component/Amenity'
import GetTheApp from '@/myComponents/GetTheApp'
import Header from '@/myComponents/Header'
import MallSlider from '@/myComponents/MallSlider'
import MyFooter from '@/myComponents/MyFooter'
import MyGallery from '@/myComponents/MyGallery'
import { faWebflow } from '@fortawesome/free-brands-svg-icons'
import { faBed, faCamera, faDumbbell, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function MallDetail() {

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
        <section className='max-w-[1200px] mx-auto py-10 px-5'>
          <h1 className='text-3xl font-semibold'>Century Mall</h1>
          <div className='flex items-center py-4 gap-x-3'>
            <img src="images/ratings/rating-35.png" alt=""  className='w-24'/>
            <span>(3.5) <span><span className='underline'>2340</span> reviews</span></span>
          </div>
          <div className='flex gap-x-3 items-center'>
            <a href="#" className='underline'>Website</a>
            <FontAwesomeIcon icon={faLink} />
          </div>

          <div className='flex gap-x-4 py-2'>
            <span><strong>5</strong> Total Space |</span>
            <span><strong>8</strong> Free Space |</span>
            <span><strong>0</strong> Vacancy |</span>
            <span><strong>3</strong> Event |</span>


          </div>
        </section>
        <section className='max-w-[300px] mx-auto py-10 px-5'>
          
          <MallSlider />
        </section>

        <section className='max-w-[1200px] mx-auto px-4 my-4'>
          <div className='flex gap-x-5 md:flex-row flex-col'>
            <div className='md:w-[90%]'>
              <h1 className='text-3xl font-semibold'>Century Mall</h1>
              <p className='py-5'><a href="#" className='underline'>Lorem ipsum dolor sit</a> amet consectetur adipisicing elit. Assumenda doloribus ad sint suscipit harum eius, accusantium at sequi impedit ratione molestiae delectus aliquam illum eos, magni nemo autem voluptatem minus dolores exercitationem ut nihil consequatur asperiores. Voluptates, hic at? Nemo vitae maiores optio vel <br/><br/> <a href="#" className='underline'>Error minima</a> dolorum nihil deserunt assumenda ab. Eveniet recusandae saepe commodi nihil, minima hic dolores voluptas impedit accusantium dolorem ipsam qui fuga debitis animi temporibus voluptatibus quos nam aut possimus tempora placeat laboriosam tenetur. Commodi quod exercitationem enim vitae, reiciendis quo, neque voluptate nisi at cumque vel deleniti dolore aliquid fugiat aliquam. Molestias repellat ab sed.
              <br/><br/> <a href="#" className='underline'>Error minima</a> dolorum nihil deserunt assumenda ab. Eveniet recusandae saepe commodi nihil, minima hic dolores voluptas impedit accusantium dolorem ipsam qui fuga debitis animi temporibus voluptatibus quos nam aut possimus tempora placeat laboriosam tenetur. Commodi quod exercitationem enim vitae, reiciendis quo, neque voluptate nisi at cumque vel deleniti dolore aliquid fugiat aliquam. Molestias repellat ab sed.</p>

              <div>
                <h3 className='text-2xl font-semibold'>Amenities</h3>
                <div className='flex gap-x-12  rounded-2xl my-5 '>
                  <Amenity icon1={faCamera} icon2={faDumbbell} icon3={faBed} title1={'Security'} title2={'Gym'} title3={'Furnished'} />
                  <Amenity icon1={faCamera} icon2={faDumbbell} icon3={faBed} title1={'Security'} title2={'Gym'} title3={'Furnished'} />
                  <Amenity icon1={faCamera} icon2={faDumbbell} icon3={faBed} title1={'Security'} title2={'Gym'} title3={'Furnished'} />
                </div>
              </div>
            </div>

            <div className='outline outline-1 rounded-lg outline-gray-500 p-5 md:w-[45%] '>
              <h2 className='text-2xl font-semibold mb-2'>Book it</h2>
              <div className='flex flex-col gap-y-1'>
                <label htmlFor="" className='p-2'>Full Name</label>
                <input type="text" name="" id="" className='w-[300px] mx-3 focus:ring-0 ring-gray-500' placeholder='Enter your name'/>
              </div>

              <div className='flex flex-col gap-y-1 py-1'>
                <label htmlFor="" className='p-2'>Email Address</label>
                <input type="text" name="" id="" className='w-[300px] mx-3 focus:ring-0 ring-gray-500' placeholder='Enter email'/>
              </div>

              <div className='flex flex-col gap-y-1 py-1'>
                <label htmlFor="" className='p-2'>Message</label>
                <textarea type="text" name="" id="" className='w-[400px] h-[200px] mx-3 focus:ring-0 ring-gray-500' placeholder='Enter message'></textarea> 
              </div>

              <button type='submit' className='px-5 py-3 text-white bg-greenish my-4 mx-4'>Book</button>
            </div>
          </div>
        </section>
        <GetTheApp googleBadge={"images/google-play-badge.png"} iphoneBadge={"images/google-play-badge.png"} img={"images/phone-mpckup.png"}/>
        <MyFooter youWant={true} bgColor={'mt-10'}/>
      </main> 
    </>
  )
}

export default MallDetail
