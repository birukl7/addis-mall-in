import { faLocation, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import TopCard from './TopCard';
import SocialIcon from './TinyIcons/SocialIcon';
// import MyDropDown from './myDropDown';

function Top() {
  return (
    <div className='hidden md:block'>
      <div className='flex justify-between py-5 items-center'>
        <h1 className='font-bold text-xl'>Mall-In</h1>
        <div className='flex gap-x-6'>
          <TopCard icon={faLocation} name={'Office, Address'} address={'Sealite Mihret, Addis Ababa'} />
          <TopCard icon={faMailBulk} name={'Email Address'} address={'melfantech@gmail.com'} />
          <TopCard icon={faPhone} name={'Drop a Line'} address={'+251-94-055361'} />
          <div className='flex gap-x-2'>
            <SocialIcon icon={faTwitter} />
            <SocialIcon icon={faFacebookF} />
            <SocialIcon icon={faLinkedinIn} />
          </div>

        </div>
          <div className='flex gap-x-2'>
            <a href='/login' className='p-3 px-4 bg-greenish text-white hover:text-black hover:outline hover:outline-1 hover:bg-transparent transition duration-200 ease-linear'>Login</a>
            <a href="/register" className='p-3 bg-greenish text-white hover:text-black hover:outline hover:outline-1 hover:bg-transparent transition duration-200 ease-linear'>Sign Up</a>
          </div>
      </div>
      
    </div>
  );
}

export default Top
