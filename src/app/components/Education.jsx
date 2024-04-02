import highSchool from '@/assets/highSchool.jpg'
import college from '@/assets/college.jpg'
import mss from '@/assets/mss.jpg'
import bss from '@/assets/bss.jpg'
import Image from 'next/image';

const Education = () => {
    return (
        <section>
            <div className="card lg:card-side shadow-xl border-headerFooterColor border-2 mb-5">
            <figure className="lg:w-1/2 w-full"><Image src={mss} alt="MSS" className='w-[500px]'/></figure>
            <div className="card-body bg-primaryColor">
                <h2 className="card-title text-center lg:text-left">Degree: Master of Social Sciences (MSS)</h2>
                <p className='text-center lg:text-left'><span className='font-semibold '>Subject:</span> Public Administration</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>Faculty:</span> Social Science</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>University:</span> University of Dhaka, Dhaka, Bangladesh</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>Start Date:</span> 01/01/2015</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>Exam Held:</span> March, 2016</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>Result Published:</span> 07/09/2016</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>Result:</span> 3.72 out of 4.00</p>
            </div>
            </div>

            <div className="card lg:card-side shadow-xl border-headerFooterColor border-2 mb-5">
            <figure className="lg:w-1/2 w-full"><Image src={bss} alt="MSS" className='w-[500px]'/></figure>
            <div className="card-body bg-primaryColor">
                <h2 className="card-title text-center lg:text-left">Degree: Bachelor of Social Sciences (BSS)</h2>
                <p className='text-center lg:text-left'><span className='font-semibold '>Subject:</span> Public Administration</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>Faculty:</span> Social Science</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>University:</span> University of Dhaka, Dhaka, Bangladesh</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>Start Date:</span> 01/01/2011</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>Exam Held:</span> December, 2014</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>Result Published:</span> 21/05/2015</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>Result:</span> 3.66 out of 4.00</p>
            </div>
            </div>

            <div className="card lg:card-side shadow-xl border-headerFooterColor border-2 mb-5">
            <figure className="lg:w-1/2 w-full"><Image src={college} alt="MSS" className='w-[500px]'/></figure>
            <div className="card-body bg-primaryColor">
                <h2 className="card-title text-center lg:text-left">Degree: Higher Secondary School Certificate (HSC)</h2>
                <p className='text-center lg:text-left'><span className='font-semibold '>Subject:</span> Science</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>Board:</span> Dhaka, Bangladesh</p>
                
                <p className='text-center lg:text-left'><span className='font-semibold'>Start Date:</span> 01/07/2008</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>Result Published:</span> 15/07/2010</p>
               
                <p className='text-center lg:text-left'><span className='font-semibold'>Result:</span> 4.70 out of 5.00</p>
            </div>
            </div>

            <div className="card lg:card-side shadow-xl border-headerFooterColor border-2 mb-5">
            <figure className="lg:w-1/2 w-full"><Image src={highSchool} alt="MSS" className='w-[500px]'/></figure>
            <div className="card-body bg-primaryColor">
                <h2 className="card-title text-center lg:text-left">Degree: Higher Secondary School Certificate (HSC)</h2>
                <p className='text-center lg:text-left'><span className='font-semibold '>Subject:</span> Science</p>
                <p className='text-center lg:text-left'><span className='font-semibold'>Board:</span> Dhaka, Bangladesh</p>
                
                <p className='text-center lg:text-left'><span className='font-semibold'>Start Date:</span> 01/01/2006</p>

                <p className='text-center lg:text-left'><span className='font-semibold'>Result Published:</span> 26/06/2008</p>
               
                <p className='text-center lg:text-left'><span className='font-semibold'>Result:</span> 5.00 out of 5.00</p>
            </div>
            </div>
        </section>
    );
};

export default Education;


{/* <div className='grid-cols-1 lg:grid-cols-2 justify-center gap-10 items-center mb-20'>
                <div className="card w-96  bg-headerFooterColor shadow-xl hover:scale-105 hover:duration-1000">
                <figure className="px-10 pt-10">
                    <Image src={university} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Dhaka University</h2>
                    <p>Public Administration</p>  
                    <p>Session: 2010-2011</p>  
                </div>
                </div>
                <div className="card w-96 mt-4 lg:mt-0 bg-headerFooterColor shadow-xl hover:scale-105 hover:duration-1000">
                <figure className="px-10 pt-10">
                    <Image src={college} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">CPSCM</h2>
                    <p>Science Group</p>  
                    <p>Session: 2010-2011</p>  
                </div>
                </div>
                <div className="card w-96  mt-4 lg:mt-0  bg-headerFooterColor shadow-xl hover:scale-105 hover:duration-1000">
                <figure className="px-10 pt-10">
                    <Image src={highSchool} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">RBMGBHS</h2>
                    <p>Science Group</p>  
                    <p>Session: 2010-2011</p>  
                </div>
                </div>
            </div> */}