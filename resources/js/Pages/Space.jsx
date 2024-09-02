import Header from '@/myComponents/Header'
import Selector from '@/myComponents/Selector'
import JobCard from '@/space-components/JobCard'
import rust from '../../../public/images/pp2.jpg'
import React from 'react'
import JobGrid from '@/space-components/JobGrid'
import GetTheApp from '@/myComponents/GetTheApp'
import google from '../../../public/images/google-play-badge.png'
import phonepic from '../../../public/images/phone-mpckup.png'
import MyFooter from '@/myComponents/MyFooter'
import { usePage } from '@inertiajs/react'

function Space() {

  const {envVariables} = usePage().props

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
        <section className='mt-10'>
          <div className='max-w-[1100px] mx-auto  rounded-lg bg-yellowish text-white p-10 outline oultline-black outline-2'>
            <h1 className='text-3xl font-semibold'>Looking for a new Opportunitits in malls?</h1>
            <p className='py-3'>Browse our latest job openings</p>
          </div>

        </section>

        <section className='max-w-[1200px] mx-auto mt-7'>
          <div className='gap-y-3 md:gap-y-0 grid md:grid-cols-4 sm:grid-cols-3  gap-x-8 p-6 bg-white shadow-2xl rounded-lg'>
            <Selector title={'Location'} api={'addis-ababa-locations'} url={envVariables.APP_URL}/>
            <Selector title={'Job Type'} api={'job-type'} url={envVariables.APP_URL} />
            <Selector title={'Experience'}  api={'job-experience'} url={envVariables.APP_URL}/>

            <div>
              <button type="submit" className='bg-greenish text-white py-3 px-5 flex items-center justify-center mt-7 rounded-xl'>Apply Filter</button>
            </div>

          </div>
        </section>

        <section className='flex md:flex-row flex-col max-w-[1300px] mx-auto mt-10 gap-x-8 px-5'>
          <div className='w-full'>
            <div>
              <h2 className='text-2xl font-semibold pb-5'>Related Jobs</h2>
            </div>


              <JobCard image={rust}/>
              <JobCard image={rust}/>
              <JobCard image={rust}/>
              <JobCard imaget={rust}/>
              <JobCard image={rust}/>
              <div className='flex text-center w-full items-center justify-center py-3 outline outline-1 hover:bg-greenish hover:text-white'>Show More</div>
          </div>
          <div className='w-full'>
            <h3 className='text-2xl m-2 font-semibold pb-6'>Malls With Vacancies/Free space</h3>
            <div className='grid md:grid-cols-2 gap-x-5'>
              <div className='grid gap-y-5'>
                <JobGrid height={'400px'} />
                <JobGrid height={'300px'} />
                <JobGrid height={'300px'} />
                <JobGrid height={'400px'} />
              </div>

              <div className='grid gap-y-5'>
                <JobGrid height={'300px'} />
                <JobGrid height={'400px'} />
                <JobGrid height={'400px'} />
                <JobGrid height={'300px'} />
              </div>

            </div>

          </div>
        </section>

        <GetTheApp googleBadge={google} iphoneBadge={google} img={phonepic}/>

        <section className='mt-20'>
          <MyFooter />
        </section>
      </main>
    </>
  )
}

export default Space
