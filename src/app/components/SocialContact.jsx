import Image from 'next/image';
import React from 'react';
import socialContact from '@/assets/socialContact.svg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';

const SocialContact = () => {
    return (
        <section>
            <div>
                <Image src={socialContact} width={300} alt='' className='mx-auto'/>
                <ul className='socialLink2 mt-4 mx-auto'>
                    <Link href={''} ><FaLinkedin/></Link>
                    <Link href={''}><FaGithub /></Link>
                    <Link href={''}><SiUpwork /></Link>
                    <Link href={''}><FaFacebook /></Link>
                    
                </ul>
                <div className='contactInfo mt-4 '>
                    <p className='text-lg text-center'><span className='font-semibold'>Email:</span> abidur.abid40@gmail.com</p>  <p className='text-lg text-center'><span className='font-semibold'>Mobile:</span> 01568441078</p>
                </div>
                <p className='text-center mt-2 text-lg'><span className='font-semibold'>Location:</span> Sunamganj, Bangladesh</p>
            </div>
        </section>
    );
};

export default SocialContact;