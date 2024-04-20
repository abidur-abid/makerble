'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import updateArticle from '@/assets/updateArticle.svg'
import { useRouter } from 'next/navigation';


const UpdatePatient = ({params}) => {

    const {id} = params;


  const [newPatientName, setNewPatientName] = useState('');
  const [newProblemName, setNewProblemName] = useState('');
  
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${apiUrl}/api/post/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newPatientName, newProblemName }),
      });
       
      console.log(id, newPatientName, newProblemName)
      if (!res.ok) {
        throw new Error("Failed to update patient");
      }

      router.refresh();
      router.push("/allpatient");

    } catch (error) {
      console.log(error);
    }
  };



    return (
        <section className='lg:flex justify-center items-center gap-20 mb-16 mt-16 lg:mt-0' >
            <div>
                <Image src={updateArticle} width={300} className=' mx-auto mb-8'/>
            </div>
            <div>
            <form onSubmit={handleSubmit} action="" className='px-10 '>  
                    <label className="input input-bordered flex items-center gap-2">
                    <input onChange={(e) => setNewPatientName(e.target.value)}
                    value={newPatientName}
        
                    type="text"
       
                    id="patientName"
                    className="grow placeholder-gray-600 " placeholder="Patient Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input onChange={(e) => setNewProblemName(e.target.value)}
                    value={newProblemName}
        
                    type="text"
       
                    id="problemName"
                    className="grow placeholder-gray-600 " placeholder="Problem Name"/>
                    </label>
                    <input type='submit' value='Submit' className='button mt-8 cursor-pointer w-full uppercase'/>
                </form>
            </div>
        </section>
    );
};

export default UpdatePatient;