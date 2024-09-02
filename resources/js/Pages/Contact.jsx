import Header from '@/myComponents/Header'
import contactImg from '../../../public/images/Contact us-amico.svg'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import MyFooter from '@/myComponents/MyFooter'
import GetTheApp from '@/myComponents/GetTheApp'
import google from '../../../public/images/google-play-badge.png'
import phoneImag from '../../../public/images/phone-mpckup.png'

function Contact() {
  const [posts, setPosts] = useState([]);



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
      <Header func1={toggleMenu} onclick={toggleMenuClose}/>
      <main onClick={toggleMenuClose}>
        <section className='flex max-w-[1400px] mx-auto mt-16  items-center flex-col md:flex-row gap-x-[100px] px-5'>
          <div className='md:w-[40%]'>
            <span className='text-yellowish text-xl'>Get in Touch</span>
            <h1 className='text-4xl font-semibold py-3'>Let's Chat, Reach Out to Us</h1>
            <p className='max-w-[400px] pb-10 border-b'>Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours</p>

            <div className='flex md:flex-row pt-10 justify-between flex-col'>
              <div className='flex flex-col'>
                <label htmlFor="" className='font-semibold py-2'>First Name</label>
                <input type="text" name="" id="" className='' placeholder='First name' />
              </div>

              <div className='flex flex-col pt-3 md:pt-0'>
                <label htmlFor="" className='font-semibold py-2'>Last Name</label>
                <input type="text" name="" id="" placeholder='Last name'/>
              </div>
            </div>

            <div className='flex flex-col pt-5'>
              <label htmlFor="" className='font-semibold py-2'>Email</label>
              <input type="text" name="" id="" className='mx-1' placeholder='Email address' />
            </div>

            <div className='flex flex-col pt-5'>
              <label htmlFor="" className='font-semibold py-2'>Message</label>
              <textarea type="text" name="" id="" className='h-[200px]'></textarea>
            </div>

            <div className='py-4'>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">&nbsp; I agree to our friendly <a href="#" className='underline'>privacy policy</a></label>
            </div>

            <div>
              <button className='px-3 py-3 bg-greenish text-white'>Submit</button>
            </div>
          </div>

          <div className='md:w-[40%]'>
            <div  className='w-full '>
              <img src={contactImg} alt="" />
            </div>
 
            <div>
              <div className='flex items-center gap-x-4'>
                <FontAwesomeIcon icon={faMailBulk} className='p-4 text-greenish text-xl outline outline-1 rounded-full ' />
                <div className='flex flex-col '>
                  <div className='font-semibold text-xl'>Email</div>
                  <div>melfantech@gmail.com</div>
                </div>
              </div>

              <div className='flex items-center gap-x-4 py-10'>
                <FontAwesomeIcon icon={faPhone} className='p-4 text-greenish text-xl outline outline-1 rounded-full ' />
                <div className='flex flex-col '>
                  <div className='font-semibold text-xl'>Phone</div>
                  <div>+251-94-405-5361</div>
                </div>
              </div>
            </div>
          </div>
        </section> 

        <GetTheApp googleBadge={google} iphoneBadge={google} img={phoneImag}/>

        <section className='py-10 max-w-[1300px] mx-auto'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5233533434284!2d38.821460175872765!3d9.01592988919165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8506561640e7%3A0xdb3e17edac66bcd3!2sMelfan%20tech!5e0!3m2!1sen!2set!4v1716662214077!5m2!1sen!2set" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-[350px]'></iframe>
        </section>

        <MyFooter />
      </main>
    </>
  )
}

export default Contact
