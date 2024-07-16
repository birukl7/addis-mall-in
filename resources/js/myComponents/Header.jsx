import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars, faBlog, faBuilding, faContactCard, faDashboard, faHamburger, faHome, faImage, faX } from '@fortawesome/free-solid-svg-icons';
import Top from './Top';
import SocialIcon from './TinyIcons/SocialIcon';
import { faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Ddrop from './Ddrop';
import { useInView } from 'react-intersection-observer';
import { Link, usePage } from '@inertiajs/react';


function Header({func1, onclick}) {

  const url = usePage()

  const lists = [
    { id:1, 
      name: 'Home', 
      link: '/', 
      icon: faHome, 
      styles: `${url.url === '/' ? 'outline outline-1 p-3 rounded-lg':''}`,
    },
    { id:2, 
      name: 'Mall Listing', 
      link: '/malls', 
      icon: faBuilding, 
      styles: `${url.url === '/malls' || url.url === '/mall-detail' ? 'outline outline-1 p-3 rounded-lg':''}`,
    },
    { id:3, 
      name: 'Free Space', 
      link: route('spaces'), 
      icon: faContactCard, 
      styles: `${url.url === '/spaces' ? 'outline outline-1 p-3 rounded-lg':''}`,
    },
    { id:4, 
      name: 'Gallery', 
      link: '/gallery', 
      icon: faImage, 
      styles: `${url.url === '/gallery' ? 'outline outline-1 p-3 rounded-lg':''}`,
    },
    { id:4, 
      name: 'Blog', 
      link: '/blogs', 
      icon: faBlog,
      styles: `${url.url === '/blogs' ? 'outline outline-1 p-3 rounded-lg':''}`,
    },
    { id:6, 
      name: 'Contact', 
      link: '/contacts', 
      icon: faContactCard, 
      styles: `${url.url === '/contacts' ? 'outline outline-1 p-3 rounded-lg':''}`,
    },
    {
      id:7,
      name: 'Dashboard',
      link: '/dashboard',
      icon: faDashboard,
      styles: `${url.url === '/dashboard' || url.url === '/profile' ? 'outline outline-1 sm:hidden md:block p-3 rounded-lg':''}`,
    }
  ]

  return (
    <>
      <section className='max-w-[1200px] mx-auto px-3'>
        <Top text={'English'}/>
      </section>

			<header className='max-w-6xl mx-auto bg-slate-100 shadow-2xl rounded-lg sm:px-10 px-4 py-5 flex justify-between sticky top-0 z-40'>
				
					<ul className='flex md:items-center  gap-x-8 font-bold md:static fixed z-20 md:z-0 bottom-0 top-0 right-20 left-0 flex-col md:flex-row pt-8 md:pt-0 shadow-xl md:shadow-none md:bg-transparent bg-slate-200 items-start pl-20 md:pl-0 justify-start  md:flex hidden ' id='navlinks'>
            <div className='md:hidden flex items-center justify-between '>
              <button onClick={onclick} className='-ml-16 -mt-12'><FontAwesomeIcon icon={faX} className=''/></button>
              <h1 className='font-bold text-xl ml-16 mb-4'>Mall In.</h1>
            </div>
            {
              lists.map((list)=> 
              <li key={list.id} className='my-[18px] md:my-0 '>
                <Link href={list.link} className={`hover:text-slate-700 hover:underline flex md:block items-center gap-x-5 ${list.styles}  `}>
                <FontAwesomeIcon icon={list.icon} className='md:hidden text-greenish'/>{list.name}
                </Link>
              </li>
              )
            }
            <div className='md:hidden border-t-[1.25px] border-black py-4 mt-5 border-b-[1.25px]'>
              <SocialIcon icon={faTelegram}/>
              <SocialIcon icon={faInstagram} />
              <SocialIcon icon={faTwitter} />
            </div>
            <div className='md:hidden mt-10 -ml-3 flex gap-x-2'>
              <Link href='/login' className='p-3 px-4 bg-greenish text-white hover:text-black hover:outline hover:outline-1 hover:bg-transparent transition duration-200 ease-linear'>Login</Link>
              <Link href="/register" className='p-3 bg-greenish text-white hover:text-black hover:outline hover:outline-1 hover:bg-transparent transition duration-200 ease-linear'>Sign Up</Link>
            </div>
					</ul>

					<ul className='flex gap-x-8 font-bold items-center sm:py-0 pt-4'>
            <div className='sm:hidden flex items-center gap-x-3'>
              <div>
                <button className='z-50' onClick={func1}>
                  <FontAwesomeIcon icon={faBars} className='text-2xl' />
                </button>
              </div>
              <div>
                <h1 className='font-bold'>MallIn</h1>
              </div>
            </div>
						<Ddrop />
						<li><a href="https://t.me/birukl_777" target='_blank' className=' bg-yellowish text-white rounded-3xl md:p-3 py-[5px] px-[8px]   text-sm flex items-center gap-x-2 '>Contact Us <FontAwesomeIcon icon={faTelegram} className='text-xl hidden md:block' /></a></li>
						{/* <li><a href=""><FontAwesomeIcon icon={faHamburger} /></a></li> */}
					</ul>
			
			</header> 
    </>
  )
}

export default Header
