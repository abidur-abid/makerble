import Image from 'next/image';
import travelling from '@/assets/travelling.png'
import teaching from '@/assets/teaching.png'
import learning from '@/assets/learning.png'
import playing from '@/assets/playing.png'

const Like = () => {
    return (
       <section>
        <div className='lg:flex justify-center gap-32 items-center'>
        <div>
            <Image src={teaching} className='w-40 lg:w-96 mx-auto lg:mx-0'/>
            <h1 className='text-lg font-semibold mt-8 text-center uppercase'>Teaching</h1>
         </div>
         <div className='mt-12 lg:mt-0'>
            <Image src={learning} className='w-40 lg:w-96 mx-auto lg:mx-0'/>
            <h1 className='text-lg font-semibold mt-8 text-center uppercase'>Learning</h1>
         </div>
         <div className='mt-12 lg:mt-0'>
            <Image src={playing} className='w-40 lg:w-96 mx-auto lg:mx-0'/>
            <h1 className='text-lg font-semibold mt-8 text-center uppercase'>Playing</h1>
         </div>
         <div className='mt-12 lg:mt-0'>
            <Image src={travelling} className='w-40 lg:w-96 mx-auto lg:mx-0'/>
            <h1 className='text-lg font-semibold mt-8 text-center uppercase'>Travelling</h1>
         </div>
        </div>
       </section>
    );
};

export default Like;