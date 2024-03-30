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
                <h1 className='text-2xl font-semibold'>Hey, My name is Mustafizur Rahman! I’m Lecturer at Jatiya Kabi Kazi Nazrul Islam University.</h1> <br />
                <p className='lg:text-justify mb-4'>I'm excited to embark on this academic journey with you all. I encourage you to approach the subject with curiosity, critical thinking, and an open mind. Together, we'll explore the intricacies of Infrastructure Development  and cultivate a deeper understanding of its relevance in today's world. Thank you.</p>
                <div className='flex justify-center lg:justify-start'>
                 <Link href={'/contact'}><button className='button animate-pulse mx-auto lg:ml-0'>Email Me</button></Link>
                </div>
                </div>
            </div>
            
        </section>
    );
};

export default AboutMe;