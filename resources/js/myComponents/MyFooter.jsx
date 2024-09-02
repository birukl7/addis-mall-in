import React from 'react'
import SocialIcon from './TinyIcons/SocialIcon'
import { faFacebookF, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import FooterCard from './FooterCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHeadset, faLocation, faMailBulk, faPhone, faRocket } from '@fortawesome/free-solid-svg-icons'

function MyFooter({bgColor, youWant}) {
  return (
    <>
      <section className={` ${bgColor} `}  >
        <div className={`${youWant ? '': 'hidden'} max-w-[1100px] mx-auto py-10 px-5`}>
          <div className='flex justify-between gap-x-[50px] md:flex-row flex-col gap-y-5'>
            <div>
              <div className='flex items-center max-w-[400px] gap-x-6 outline outline-1 outline-slate-500 p-5 rounded-xl'>
                <FontAwesomeIcon icon={faHeadset} className='text-5xl text-greenish'/>
                <p className='md:text-2xl '>
                  Need Any Suppport For Tour & Travles ?
                </p>
                <FontAwesomeIcon icon={faArrowRight} className='text-xl ml-5 -rotate-45' />
              </div>
            </div>

            <div>
              <div className='flex items-center max-w-[420px] gap-x-6 outline outline-1 outline-slate-500 p-5 rounded-xl'>
                <FontAwesomeIcon icon={faRocket} className='text-5xl text-greenish'/>
                <p className='md:text-2xl '>
                  Ready to Get Started With Vacations!
                </p>
                <FontAwesomeIcon icon={faArrowRight} className='text-xl ml-5 -rotate-45' />
              </div>
            </div>
          </div>
        </div>
        <footer className={`max-w-[1200px] mx-auto px-5`}>
          <div className=' grid md:grid-cols-4 sm:grid-cols-3 gap-x-4'>
            <div>
              <div>
                <h1 className='text-3xl font-semibold'>Mall In</h1> 
              </div>
              <div>
                <p className='py-2 md:w-[200px] w-[350px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nisi?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi.</p>
              </div>
              <div className='md:py-2 py-5'>
                {/* logos */}
                <SocialIcon icon={faTelegram}/>
                <SocialIcon icon={faInstagram}/>
                <SocialIcon icon={faTwitter} />
                <SocialIcon icon={faFacebookF} />
              </div>
            </div>
            <FooterCard title={'Quick Links'}/>
            <FooterCard  title={'About Us'}/>
            <div className='pt-4'>
              <h4 className='text-2xl py-2 font-semibold '>Contact Us</h4>
              <ul>
                <li className='gap-x-3 flex items-center py-1'><FontAwesomeIcon icon={faLocation} /> <address>Addis Ababa, Sealite Mihret</address></li>
                <li className='gap-x-3 flex items-center py-1'> <FontAwesomeIcon icon={faPhone} /><a href='tel'>+251-11-1111-11</a></li>
                <li className='gap-x-3 flex items-center py-1'><FontAwesomeIcon icon={faMailBulk} /><a href="mailto">melfantech@info.com</a></li>
                <li></li>
              </ul>
            </div>

          </div>

          
          <div className='py-5 border-t-2 mt-3 flex justify-center items-center'>
            copyright@&nbsp;by&nbsp; <a href="https://biruk-lemma.vercel.com" className='underline'>Biruk Lemma</a> &nbsp;2024
          </div>
        </footer>
        </section>
    </>
  )
}

export default MyFooter
