import Image from 'next/image';
import React from 'react';
import g1 from '@/assets/g1.jpg'
import g2 from '@/assets/g2.jpg'
import g3 from '@/assets/g3.jpg'
import g4 from '@/assets/g4.jpg'
import g5 from '@/assets/g5.jpg'
import g6 from '@/assets/g6.jpg'
import g7 from '@/assets/g7.jpg'
import g8 from '@/assets/g8.jpg'
import g9 from '@/assets/g9.jpg'
import g10 from '@/assets/g10.jpg'
import g11 from '@/assets/g11.jpg'
import g12 from '@/assets/g12.jpg'

const Gallery = () => {
    return (
       <section className='mb-20'>
         <div className='grid grid-cols-3 lg:grid-cols-4 justify-center items-center gap-5'>
            <Image src={g1} className='hover:scale-105 hover:duration-1000 rounded'/>
            <Image src={g2} className='hover:scale-105 hover:duration-1000 rounded'/>
            <Image src={g3} className='hover:scale-105 hover:duration-1000 rounded'/>
            <Image src={g4} className='hover:scale-105 hover:duration-1000 rounded'/>
            <Image src={g5} className='hover:scale-105 hover:duration-1000 rounded'/>
            <Image src={g6} className='hover:scale-105 hover:duration-1000 rounded'/>
            <Image src={g7} className='hover:scale-105 hover:duration-1000 rounded'/>
            <Image src={g8} className='hover:scale-105 hover:duration-1000 rounded'/>
            <Image src={g9} className='hover:scale-105 hover:duration-1000 rounded'/>
            <Image src={g10} className='hover:scale-105 hover:duration-1000 rounded'/>
            <Image src={g11} className='hover:scale-105 hover:duration-1000 rounded'/>
            <Image src={g12} className='hover:scale-105 hover:duration-1000 rounded'/>
         </div>
       </section>
    );
};

export default Gallery;