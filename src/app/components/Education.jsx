import highSchool from '@/assets/highSchool.jpg'
import college from '@/assets/college.jpg'
import university from '@/assets/university.jpg'
import Image from 'next/image';

const Education = () => {
    return (
        <section>
            <div className='lg:flex justify-center gap-10 items-center mb-20'>
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
            </div>
        </section>
    );
};

export default Education;