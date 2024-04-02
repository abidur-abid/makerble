import Image from 'next/image';
import React from 'react';
import about from '@/assets/about.jpg'
import Link from 'next/link';

const AboutMe = () => {
    return (
        <section>
            <div className='lg:flex justify-center gap-32 items-center'>
                <div className=''>
                < Image src={about} className='w-72 mb-8 h-auto mx-auto lg:mx-0 rounded border-4 border-headerFooterColor'/>
                </div>
                <div className='w-1/2 mx-auto lg:mx-0'>
                <h1 className='text-2xl font-semibold '>Hey, My name is Sadik Hasan Shuvo! I’m Assistant Professor at Jatiya Kabi Kazi Nazrul Islam University.</h1> <br />
                <p className='lg:text-justify mb-4'>I believe in democracy, human rights, and personal liberty. I dream of a society based on diversity where people welcome differences. I apply transformational leadership style, Y-type motivation, formal and informal communication, and rational decision-making style. I am a pro at creating new ideas and implement these. I can work tirelessly for long hours and not stop until I achieve my goal. People find me cordial, helpful, and extrovert.</p>
                <div className='flex justify-center lg:justify-start'>
                 <Link href={'/contact'}><button className='button animate-pulse mx-auto lg:ml-0'>Email Me</button></Link>
                </div>
                </div>
            </div>
            
        </section>
    );
};

export default AboutMe;