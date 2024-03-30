'use client'
import Image from 'next/image';
import registration from '@/assets/register.svg'
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import useAuth from '@/authentication/useAuth';
import toast from 'react-hot-toast';
import SectionTitle from '@/app/shared components/SectionTitle';
import GoogleLogin from '@/app/shared components/GoogleLogin';
import { startTransition } from 'react';
import createJWT from '@/utils/createJWT';
import { useRouter, useSearchParams } from "next/navigation";

const Registration = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
      } = useForm();

      const { createUser, profileUpdate } = useAuth();

      const search = useSearchParams();
      const from = search.get("redirectUrl") || "/";
      const { replace, refresh } = useRouter();

      const uploadImage = async (event) => {
        const formData = new FormData();
        if (!event.target.files[0]) return;
        formData.append("image", event.target.files[0]);
        const toastId = toast.loading("Image uploading...");
        try {
          const res = await fetch(
            `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
            {
              method: "POST",
              body: formData,
            }
          );
          if (!res.ok) throw new Error("Failed to upload image");
    
          const data = await res.json();
          toast.dismiss(toastId);
          toast.success("Image uploaded successfully!");
          setValue("photo", data.data.url);
        } catch (error) {
          toast.error("Image not uploaded!");
          toast.dismiss(toastId);
        }

      };

    const onSubmit = async (data, event) => {
        const { name, email, password, photo } = data;
        const toastId = toast.loading("Loading...");
        try {
          await createUser(email, password);
          await createJWT({ email });
          await profileUpdate({
            displayName: name,
            photoURL: photo,
          });
          
          startTransition(() => {
            refresh();
            replace(from);
            toast.dismiss(toastId);
            toast.success("User  Registered successfully");
          });
          
          
        } catch (error) {
          toast.dismiss(toastId);
          toast.error(error.message || "User not signed in");
        }

        const inputName = document.getElementById('name');
        inputName.value ='';
        const inputEmail = document.getElementById('email');
        inputEmail.value ='';
        const inputPassword = document.getElementById('password');
        inputPassword.value ='';
        const inputPhoto = document.getElementById('photo');
        inputPhoto.value ='';
        
        

      };

    return (
        <section >
            
              <div className='lg:-mt-20'>
              <SectionTitle title={'Please Register'}/>
              </div>
               <div className='contactForm mb-20'>
               <div className='mx-auto mb-8'>
                    <Image src={registration} width={500} alt='Registration' />
                </div>
                <div className='mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input type="text" name="name" placeholder='YOUR NAME' id='name'  className='input'
                            {...register("name", { required: true })}
                            />   
                            {errors.name && (
                            <span className="text-red-500 text-base mt-1">
                                Please enter your name.
                            </span>
                            )}
                        </div>
                        <div>
                            <input type="file" className="file-input file-input-bordered w-full mt-4 input py-6" id='photo' onChange={uploadImage} />
                        </div>
                        <div>
                            <input type="email" name="email" placeholder='YOUR EMAIL' id='email'  className='input mt-4'
                            {...register("email", {
                                required: true,
                                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                              })}
                            /> 
                            {errors.email && (
                            <span className="text-red-500 text-base mt-1">
                                Please enter a valid email address.
                            </span>
                            )}   
                        </div>
                        <div>
                        <input type="password" name="password" placeholder='YOUR PASSWORD' id='password' className='input mt-4'
                        {...register("password", { required: true, minLength: 6 })}
                        />
                        {errors.password && (
                        <span className="text-red-500 text-base mt-1">
                            Please enter a password.
                        </span>
                        )}
                        </div>
                        <input type="submit" value="submit" className='button mt-4 w-full'/>
                    </form>
                    <div className="divider text-slate-300">OR</div>
                    <GoogleLogin/>
                    <div className='mt-4 flex justify-center'><Link href={'/login'} className='link text-center'>If you already have an account, <br/> please login.</Link></div>
                </div>
               </div>
           
        </section>
    );
};

export default Registration;


