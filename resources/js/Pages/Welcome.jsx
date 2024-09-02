import React from 'react';
import Top from '@/myComponents/Top';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight, faBlog, faBuilding, faContactCard, faHome, faImage, faLocation, faMagnifyingGlass, faMailBulk, faPhone, faShield, faUniversity } from '@fortawesome/free-solid-svg-icons';
import Ddrop from '@/myComponents/Ddrop';
import FIlterContainer from '@/myComponents/FIlterContainer';
import MallCard from '@/myComponents/MallCard';

//static images
import addis from '../../../public/images/addis.jpg';
import mallimage from '../../../public/images/mall-9.jpg'
import illust from '../../../public/images/ratings/Online shopping-amico.svg'
import rating1 from '../../../public/images/ratings/rating-0.png';
import rating05 from '../../../public/images/ratings/rating-05.png';
import rust from '../../../public/images/phone-mpckup.png'
import google from '../../../public/images/google-play-badge.png'
import Numbers from '@/myComponents/Numbers';
import ArticleCard from '@/myComponents/ArticleCard';

import FIndMalls from '@/myComponents/FIndMalls';
import Header from '@/myComponents/Header';
import GetTheApp from '@/myComponents/GetTheApp';
import MyFooter from '@/myComponents/MyFooter';
import { useInView } from 'react-intersection-observer';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion,  }) {

  const {name} = useInView()
  const { envVariables } = usePage().props;

 // console.log(envVariables.APP_URL)
  // header links
  const lists = [
    {id:1, name: 'Home', link: '/', icon: faHome},
    {id:2, name: 'Accomodation', link: '#', icon: faBuilding},
    {id:3, name: 'Gallery', link: '/gallery', icon: faImage},
    {id:4, name: 'Blog', link: '/blogs', icon: faBlog},
    {id:5, name: 'Contact', link: '/contact', icon: faContactCard}
  ]

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
      <Head title='Welcome | Addis Mall' />
      <Header func1={toggleMenu} onclick={toggleMenuClose}/>

      <main onClick={toggleMenuClose}>
        <section
          style={{ backgroundImage: `url('${mallimage}')` }}
          className='text-white h-[500px] flex justify-center items-center bg-cover bg-center -mt-6 px-5 md:px-0 relative -z-10'
        >
          <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent rounded-xl'></div>
          <div className='flex justify-center items-center'>
            <h1 className='text-7xl font-bold'>Explore Malls in Addis</h1>
          </div>
        </section>

        {/* search container */}
        <section className='max-w-[1200px] w-full mx-auto  items-center justify-center px-5'  >
          <FIlterContainer url={envVariables.APP_URL}/>
        </section>

        <section className='max-w-[1200px] mx-auto mt-12 mb-4 px-5' >

          {/* Main content */}
          <div className='flex justify-between items-center mb-5'>
            <h2 className='font-bold'>Showing Resullts </h2>
            <div>
              <strong>Sort By &nbsp; &nbsp; &nbsp;</strong>
              <Ddrop />
            </div>
          </div>

          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>


            <MallCard  rating={rating1} num={1} img={"images/mall-6.jpg"}/>
            <MallCard rating={rating05} num={2} img={"images/mall-3.jpg"}/>
            <MallCard  rating={rating05} img={"images/mall-2.jpg"} />
            <MallCard  rating={rating1} num={1} img={"images/mall-4.jpg"}/>
            <MallCard rating={rating05} num={4} img={"images/mall-7.jpg"}/>
            <MallCard  rating={rating05} img={"images/mall-8.jpg"}/>
            <MallCard  rating={rating1} num={1} img={"images/mall-9.jpg"}/>
            <MallCard rating={rating05} num={6} img={"images/mall-6.jpg"}/>
            <MallCard  rating={rating05}  num={7} img={"images/mall-4.jpg"}/>
          </div>

          {/* pagination */}
          <div className='flex items-center py-2 justify-center mt-20 gap-x-3 text-xs'>
            <FontAwesomeIcon icon={faArrowLeft} className='p-1 outline-1 outline-slate-600  outline rounded-full'/>
            <span className='p-1 outline-1 outline-slate-600  outline rounded-full bg-greenish text-white cursor-pointer'>
              01
            </span>
            <span className='p-1 outline-1 outline-slate-600  outline rounded-full hover:bg-greenish hover:text-white cursor-pointer'>
              02
            </span>
            <span className='p-1 outline-1 outline-slate-600  outline rounded-full hover:bg-greenish hover:text-white cursor-pointer'>
              03
            </span>
            <span className='p-1 outline-1 outline-slate-600  outline rounded-full hover:bg-greenish hover:text-white cursor-pointer'>
              04
            </span>
            <FontAwesomeIcon icon={faArrowRight} className='p-1 outline-1 outline-slate-600  outline rounded-full'/>
          </div>
        </section>

        <section className='max-w-[1100px] w-full mx-auto  mt-10 mb-10 px-4' >
          <div className='flex justify-between items-center mb-5'>
            <h2 className='font-bold text-2xl'>Popular Subctites </h2>
          </div>

          <div className='grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-6 md:gap-y-0'>
            <div style={{backgroundImage: 'url("images/mall-7.jpg")'}} className='rounded-xl md:h-[600px]  bg-cover relative'>

            <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent rounded-xl' ></div>

              <div className=' flex  items-center text-white justify-between px-4 pr-8 mt-[490px] '>
                <div className='flex flex-col p-5 z-20'>
                  <h3 className='text-3xl x'>Yeka Subcity</h3>
                  <span>3+ Listing</span>
                </div>
                <div className='p-3 rounded-full outline outline-1 z-20'>
                  <FontAwesomeIcon icon={faArrowRight} className='text-white text-xl' />
                </div>
              </div>

            </div>

            <div className='grid grid-cols-1 gap-y-5'>

              <div className='grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-6 md:gap-y-0'>
                <div className='bg-cover bg-center rounded-xl  h-[300px] md:h-auto relative' style={{backgroundImage: `url('${addis}')`}}  >

                  <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent rounded-xl'></div>

                  <div className=' flex  items-center text-white justify-center absolute bottom-0'>
                    <div className='flex flex-col p-5'>
                      <h3 className='text-xl'>Yeka Subcity</h3>
                      <span>3+ Listing</span>
                    </div>
                    <div className='p-[1.5px] rounded-full  '>
                      <FontAwesomeIcon icon={faArrowRight} className='text-white text-[14px]' />
                    </div>
                  </div>


                </div>
                <div className='bg-cover bg-center rounded-xl relative h-[300px] md:h-auto' style={{backgroundImage: `url('${addis}')`}}>

                  <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent rounded-xl'></div>

                  <div className=' flex  items-center text-white justify-between px-4 pr-8 absolute bottom-0'>
                  <div className='flex flex-col p-5'>
                    <h3 className='text-xl'>Yeka Subcity</h3>
                    <span>3+ Listing</span>
                  </div>
                  <div className='p-3 rounded-full '>
                    <FontAwesomeIcon icon={faArrowRight} className='text-white' />
                  </div>
                  </div>
                </div>
              </div>

              <div className='rounded-xl bg-center bg-cover relative h-[400px] md:h-auto' style={{backgroundImage: `url('${addis}')`}}>

                <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent rounded-xl'></div>

                <div className='flex md:gap-x-[230px] items-center text-white justify-between px-4 md:pr-8 absolute bottom-0'>
                  <div className='flex flex-col p-5'>
                    <h3 className='text-3xl'>Yeka Subcity</h3>
                    <span>3+ Listing</span>
                  </div>
                  <div className='p-3 rounded-full outline outline-1 '>
                    <FontAwesomeIcon icon={faArrowRight} className='text-white text-xl' />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className=' max-w-[1200px] mx-auto px-4' >
          <Numbers />
        </section>

        {/* find your malls */}
        <section className='max-w-[1200px] mx-auto pt-14 md:pt-10 h-screen flex items-center px-5 ' >
          <div className='grid md:grid-cols-2 justify-between '>
            <div className='flex flex-col items-center justify-center'>
              <h2 className='md:text-6xl text-5xl text-center md:text-left '>Find your malls in addis</h2>

              <FIndMalls icon={faMagnifyingGlass} title={'Define Your Needs'} description={'Consider the type of shopping experience you prefer, such as high-end fashion, electronics, home goods, or a combination.'} />

              <FIndMalls icon={faShield} title={'Utilize Search Tools'} description={                `Perform searches using keywords related to your preferences, such as "Technology", "Fashion" or "Bank".`} />

              <FIndMalls icon={faUniversity} title={'Visit Mall Details'} description={'                Visit the malls detail information on the platform that showcase their offerings, list of stores, events, and others.'} />

            </div>
            <div className='px-3 pt-5 md:p-0'>
              <img src={illust} alt="shopping" className='' />
            </div>
          </div>
        </section>

          {/* Get the App */}
        <GetTheApp googleBadge={google} iphoneBadge={google} img={rust}/>

        {/* Related Articles */}
        <section className='pt-10 px-5 ' >
          <div className='max-w-[1200px] mx-auto '>
            <h2 className='text-3xl'>Related Articles</h2>
              <div className='grid md:grid-cols-3 py-7 gap-x-5 gap-y-8'>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
              </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className='max-w-[1200px] mx-auto flex items-center justify-center py-14 px-4' >
          <div>
            <h4 className='text-3xl text-center py-5'>Sign up to our newsletter</h4>
            <div className='flex shadow-3xl '>
              <input type="search" name="" placeholder='Enter Your Email' id="" className=' rounded-l-xl md:w-[300px] w-full border-none outline outline-1 outline-slate-400 py-5'  />
              <button className='bg-greenish py-2 text-white md:px-10 px-3 rounded-r-xl flex items-center gap-x-4'>
                Send
                <FontAwesomeIcon icon={faTelegram} />
              </button>
            </div>
          </div>
        </section>
        {/* Footer*/}
        <MyFooter />
      </main>

    </>
  );
}
