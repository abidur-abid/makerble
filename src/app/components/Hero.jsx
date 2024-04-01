import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import React from 'react';
import photo from '@/assets/profile.jpg'
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='my-20 lg:my-0 '>
     <>
      <div className='lg:flex justify-center gap-32 items-center'>
        
        <div className="mb-8">
          <h1 className='text-4xl my-2 lg:text-left sm:text-center md:text-center text-center font-bold'>Sadik Hasan Shuvo </h1>
          <p className='text-2xl my-2 lg:text-left sm:text-center md:text-center text-center bg-headerFooterColor rounded  font-bold px-10 py-2 mx-auto'>Assistant Professor</p>
          <h2 className='text-xl my-2 lg:text-left sm:text-center md:text-center text-center font-bold'>Local Government and Urban Development</h2>
          <h2 className='text-mdl my-2 lg:text-left sm:text-center md:text-center text-center font-bold'>Jatiya Kabi Kazi Nazrul Islam University</h2>
          <h2 className='text-mdl my-2 lg:text-left sm:text-center md:text-center text-center font-bold'>Trishal, Mymensingh</h2>
          
          
          <ul className='socialLink my-4'>
                    <Link href={'/'} ><FaLinkedin/></Link>
                    <Link href={'/'} ><FaInstagramSquare /></Link>
                    <Link href={'/'} ><FaTwitter /></Link>
                    <Link href={'/'} ><FaFacebook /></Link>     
          </ul>
          
        </div>
        <div >
          <Image src={photo} className='rounded w-80 h-80 rounded-full mx-auto border-4 border-headerFooterColor'></Image>
        </div>
      </div>
      </>
    </section>
  );
};

export default Hero;