import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import React from 'react';
import welcome from '@/assets/welcome.svg'
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='my-20 lg:my-0 lg:-mt-20'>
     <>
      <div className=''>
        <div >
          <Image src={welcome} width={300} className='mx-auto mb-8'></Image>
        </div>
        <div className="mb-20">
          <h1 className='lg:text-4xl text-2xl my-2 text-center font-bold '>Welcome To Markeable</h1>
          <p className='lg:text-2xl text-md my-4 text-center  rounded  font-bold px-10 py-2 mx-auto'>Take the stress out of monitoring, evaluation and reporting</p>
          <ul className='socialLink2 mt-4'>
                    <Link href={'/'} ><FaLinkedin/></Link>
                    <Link href={'/'} ><FaInstagramSquare /></Link>
                    <Link href={'/'} ><FaTwitter /></Link>
                    <Link href={'/'} ><FaFacebook /></Link>     
          </ul>
          <div className='flex justify-center mt-6 mb-28'>
             <Link href='contact' className='button'>Contact</Link>
          </div>
        </div>
        
      </div>
      </>
    </section>
  );
};

export default Hero;