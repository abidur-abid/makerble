'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import updateArticle from '@/assets/updateArticle.svg'
import { useRouter } from 'next/navigation';


const UpdateArticle = ({params}) => {

    const {id} = params;


  const [newCourseName, setNewCourseName] = useState('');
  const [newTopicName, setNewTopicName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDate, setDate] = useState('');


  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/post/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newCourseName, newTopicName, newDate, newDescription }),
      });
       
      console.log(id, newCourseName, newTopicName, newDate, newDescription)
      if (!res.ok) {
        throw new Error("Failed to update post");
      }

      router.refresh();
      router.push("/dashboard/totalarticles");

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
                    <input onChange={(e) => setNewCourseName(e.target.value)}
                    value={newCourseName}
        
                    type="text"
       
                    id="courseName"
                    className="grow placeholder-gray-600 " placeholder="Course Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input onChange={(e) => setNewTopicName(e.target.value)}
                    value={newTopicName}
        
                    type="text"
       
                    id="topicName"
                    className="grow placeholder-gray-600 " placeholder="Topic Name"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input onChange={(e) => setDate(e.target.value)}
                    value={newDate}
        
                    type="text"
       
                    id="date"
                    className="grow placeholder-gray-600 " placeholder="Set Date"/>
                    </label>
                    <textarea onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
                    type="text"
                    id="description"
                    className="textarea textarea-bordered textarea-md w-full  mt-8 placeholder-gray-600 text-base" 
                    placeholder="Write Topic Description"  ></textarea>
                    <input type='submit' value='Submit' className='button mt-8 cursor-pointer w-full uppercase'/>
                </form>
            </div>
        </section>
    );
};

export default UpdateArticle;