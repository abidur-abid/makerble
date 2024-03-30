'use client'
import { GrArticle } from "react-icons/gr";
import CountUp from 'react-countup';
import { FaServicestack } from "react-icons/fa";
import Link from "next/link";
import { TfiWrite } from "react-icons/tfi";
import { LuUsers2 } from "react-icons/lu";





const TotalCount = () => {
    return (
        <section className='my-20 lg:flex justify-center grid grid-cols-1 gap-y-4 items-center gap-10'>
           <Link href={'/dashboard/totalarticles'} >
                <div className=" bg-headerFooterColor px-10 py-5 rounded ">
                    <GrArticle className="text-5xl mx-auto "/>
                    <h2 className=" text-lg mt-4 text-center uppercase">Total Articles</h2>
                    <div className="text-2xl mt-4 flex justify-center"><CountUp end={50} duration={3} /></div>
                </div>
           </Link>
            <Link href={'/dashboard/writearticle'}>
                <div className=" bg-headerFooterColor px-10 py-5 rounded ">
                    <FaServicestack className="text-5xl mx-auto "/>
                    <h2 className="text-lg mt-4 text-center uppercase">Write Article</h2>
                    <div className="text-2xl mt-4 flex justify-center"><TfiWrite /></div>
                </div>
            </Link>
            
           
    
        </section>
    );
};

export default TotalCount;