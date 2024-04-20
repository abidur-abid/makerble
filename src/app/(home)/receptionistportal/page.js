'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import writeArticle from '@/assets/writeArticle.svg'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ReceptionistPortal = () => {

    const [patientName, setPatientName] = useState("");
    const [problemName, setProblemName] = useState("");

    

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!patientName || !problemName) {
      alert("Patient Name and Problem Name are required.");
      return;
    }
    try {
      const res = await fetch(`${apiUrl}/api/post`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ patientName, problemName }),
      });

      if (res.ok) {
        router.push("/dashboard/totalarticles");
      } else {
        toast.error("Failed to registered a patient")
      }
    } catch (error) {
      console.log(error);
    }

      setPatientName('');
      setProblemName('');
      

  };

    return (
        <section>

            <div className='flex justify-center items-center gap-5 mb-20 mt-20 lg:mt-0'>
                <Link href={'/receptionistportal'} className='button'>Register a patient</Link>
                <Link href={'/allpatient'} className='button'>All patient</Link>
            </div>
        <div className='lg:flex justify-center items-center gap-20 mb-16 mt-16 lg:mt-0' >
            <div>
                <Image src={writeArticle} width={300} className=' mx-auto mb-8'/>
            </div>
            <div>
                <form onSubmit={handleSubmit} action="" className='px-10 '>  
                    <label className="input input-bordered flex items-center gap-2">
                    <input onChange={(e) => setPatientName(e.target.value)}
                    value={patientName}
        
                    type="text"
       
                    id="patientName"
                    className="grow placeholder-gray-600 " placeholder="Patient Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input onChange={(e) => setProblemName(e.target.value)}
                    value={problemName}
        
                    type="text"
       
                    id="problemName"
                    className="grow placeholder-gray-600 " placeholder="Problem Name"/>
                    </label>
                    <input type='submit' value='Submit' className='button mt-8 cursor-pointer w-full uppercase'/>
                </form>
            </div>
        </div>
        </section>
    );
};

export default ReceptionistPortal;