'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import writeArticle from '@/assets/writeArticle.svg'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const WriteArticle = () => {

    const [courseName, setCourseName] = useState("");
    const [topicName, setTopicName] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!courseName || !topicName || !date || !description ) {
      alert("Course Name, Topic Name, Date and description are required.");
      return;
    }
    console.log(courseName, topicName , date, description);
    try {
      const res = await fetch(`${apiUrl}/api/post`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ courseName, topicName , date, description }),
      });

      if (res.ok) {
        router.push("/dashboard/totalarticles");
      } else {
        toast.error("Failed to create an article")
      }
    } catch (error) {
      console.log(error);
    }

      setCourseName('');
      setTopicName('');
      setDate('');
      setDescription('');

  };

    return (
        <section className='lg:flex justify-center items-center gap-20 mb-16 mt-16 lg:mt-0' >
            <div>
                <Image src={writeArticle} width={300} className=' mx-auto mb-8'/>
            </div>
            <div>
                <form onSubmit={handleSubmit} action="" className='px-10 '>  
                    <label className="input input-bordered flex items-center gap-2">
                    <input onChange={(e) => setCourseName(e.target.value)}
                    value={courseName}
        
                    type="text"
       
                    id="courseName"
                    className="grow placeholder-gray-600 " placeholder="Course Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input onChange={(e) => setTopicName(e.target.value)}
                    value={topicName}
        
                    type="text"
       
                    id="topicName"
                    className="grow placeholder-gray-600 " placeholder="Topic Name"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <input onChange={(e) => setDate(e.target.value)}
                    value={date}
        
                    type="text"
       
                    id="date"
                    className="grow placeholder-gray-600 " placeholder="Set Date"/>
                    </label>
                    <textarea onChange={(e) => setDescription(e.target.value)}
                    value={description}
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

export default WriteArticle;