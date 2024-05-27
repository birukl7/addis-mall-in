import AsideBar from '@/blog-components/AsideBar'
import BlogContain from '@/blog-components/BlogContain'
import GetTheApp from '@/myComponents/GetTheApp'
import Header from '@/myComponents/Header'
import MyFooter from '@/myComponents/MyFooter'
import { Sidebar } from 'flowbite-react'
import React from 'react'

import google from '../../../public/images/google-play-badge.png'
import phoneImg from '../../../public/images/phone-mpckup.png'

function Blog() {
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

        <section className='flex max-w-[1100px] mx-auto pt-10 gap-x-[8%] flex-col md:flex-row px-3'>
          <div className='md:w-[63%]'>
            <BlogContain />
            <BlogContain />
            <BlogContain />
            <BlogContain />
            <BlogContain />
            <BlogContain />
            <div className='py-7'>
              <button className='w-full border border-black py-3 rounded-xl font-semibold hover:bg-yellowish hover:text-white hover:border-white transition-all duration-150 '>Show More</button>
            </div>
          </div>
          <aside className='md:w-[32%]'>
            <AsideBar />
          </aside>
        </section>
        <GetTheApp googleBadge={google} iphoneBadge={google} img={phoneImg}/>
        <MyFooter bgColor={' pt-8'} youWant={true}/>
      </main>
    </>
  )
}

export default Blog
