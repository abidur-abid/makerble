'use client'
import { PiStudentBold } from "react-icons/pi";
import { GrArticle } from "react-icons/gr";
import CountUp from 'react-countup';
import { LiaAwardSolid } from "react-icons/lia";
import Link from "next/link";
import { MdTopic } from "react-icons/md";


const Counter = () => {
    return (
        <section className='my-44 lg:flex lg:justify-center grid grid-cols-1 gap-5  items-center lg:gap-20'>
           <Link href={''}>
                <div className=" bg-headerFooterColor px-10 py-5 rounded">
                    <PiStudentBold className="text-5xl mx-auto "/>
                    <h2 className=" text-lg mt-4 text-center uppercase">Students</h2>
                    <div className="text-2xl mt-4 flex justify-center"><CountUp end={350} duration={3} /><span>+</span></div>
                </div>
           </Link>
            <Link href={''}>
                <div className=" bg-headerFooterColor px-10 py-5 rounded">
                   <MdTopic className="text-5xl mx-auto "/>

                    <h2 className="text-lg mt-4 text-center uppercase">Courses</h2>
                    <div className="text-2xl mt-4 flex justify-center"><CountUp end={11} duration={3} /><span>+</span></div>
                </div>
            </Link>
           <Link href={''}>
                <div className=" bg-headerFooterColor px-10 py-5 rounded">
                    <LiaAwardSolid className="text-5xl mx-auto "/>
                    <h2 className=" text-lg mt-4 text-center uppercase">Awards</h2>
                    <div className="text-2xl mt-4 flex justify-center"><CountUp end={12} duration={3} /><span>+</span></div>
                </div>
           </Link>
            <Link href={'/dashboard/writearticle'}>
                <div className=" bg-headerFooterColor px-10 py-5 rounded">
                    <GrArticle className="text-5xl mx-auto "/>
                    <h2 className="text-lg mt-4 text-center uppercase"> Articles</h2>
                    <div className="text-2xl mt-4 flex justify-center"><CountUp end={100} duration={3} /><span>+</span></div>
                </div>
            </Link>
           
    
        </section>
    );
};

export default Counter;