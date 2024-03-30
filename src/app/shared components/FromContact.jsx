"use client"
import Image from 'next/image';
import contact from '@/assets/contact.svg'
import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const FormContact = () => {

    

    const form = useRef();

    useEffect(() => {
        emailjs.init(process.env.NEXT_PUBLIC_public_key);
    }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_service_id, process.env.NEXT_PUBLIC_template_id, form.current, process.env.NEXT_PUBLIC_public_key)
      .then((result) => {
        toast.success('Successfully Send Message');
        const name = document.getElementById('name');
        name.value ='';
        const email = document.getElementById('email');
        email.value ='';
        const message = document.getElementById('message');
        message.value ='';
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <section className='lg:flex justify-center items-center gap-20 mb-16 ' >
            <div>
                <Image src={contact} width={300} className=' mx-auto mb-8'/>
            </div>
            <div>
                <form ref={form} onSubmit={sendEmail} action="" className='px-10 '>  
                    <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" name='name' className="grow placeholder-gray-600 " placeholder="Enter Your Name"  id='name'/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" className="grow placeholder-gray-600 " name='email' placeholder="Enter Your Email" id='email'/>
                    </label>
                    <textarea placeholder="Write Your Message" name='message' className="textarea textarea-bordered textarea-md w-full  mt-8 placeholder-gray-600 text-base"  id='message' ></textarea>
                    <input type='submit' value='Submit' className='button mt-8 cursor-pointer w-full uppercase'/>
                </form>
            </div>
        </section>
    );
};

export default FormContact;