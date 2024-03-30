import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import notFound from '@/assets/notFound.svg'

const NotFound = () => {
    return (
        <section className='mb-20'>
            <Image src={notFound} width={400} className='mx-auto'/>
           <div className='flex justify-center mt-12'>
           <Link href={'/'} className='button'>Back To Home</Link>
           </div>
        </section>
    );
};

export default NotFound;