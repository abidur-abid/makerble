'use client'

import Image from 'next/image';
import React from 'react';
import login from '@/assets/login.svg'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAuth from '@/authentication/useAuth';
import SectionTitle from '@/app/shared components/SectionTitle';
import GoogleLogin from '@/app/shared components/GoogleLogin';
import createJWT from '@/utils/createJWT';
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const { signIn } = useAuth();
      const search = useSearchParams();
      const from = search.get("redirectUrl") || "/";
      const { replace, refresh } = useRouter();

      const onSubmit = async (data) => {
        const { email, password } = data;
        
        try {
          await signIn(email, password);
          await createJWT({ email });
           
            
            toast.success("User signed in successfully");
            
            replace(from);
          
        } catch (error) {
          
          toast.error(error.message || "User not signed in");
        }

        const inputEmail = document.getElementById('email');
        inputEmail.value ='';
        const inputPassword = document.getElementById('password');
        inputPassword.value ='';

      };
    
      
    return (
        <section>
            
                <div className='lg:-mt-20'>
                    <SectionTitle title={"Please Login"}/> 
                </div>
                
                <div className='contactForm mb-20'>
                <div className='mx-auto mb-8'>
                    <Image src={login} width={500} alt='' />
                </div>
                <div className='mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <input type="email" name="email" placeholder='YOUR EMAIL' id='email'  className='input' 
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
                        <br />
                        <input type="password" name="password" placeholder='YOUR PASSWORD' id='password' className='input mt-4'
                        {...register("password", { required: true, minLength: 6 })}
                        />
                        {errors.password && (
                        <span className="text-red-500 text-base mt-1">
                            Please enter a password.
                        </span>
                        )}
                        <br />
                        <input type="submit" value="submit" className='button mt-4 w-full'/>
                    </form>
                    <div className="divider">OR</div>
                    <GoogleLogin/>
                    <div className='mt-4 flex justify-center'><Link href={'/registration'} className='link text-center'>If you don't have any account, <br/> please register.</Link></div>
                </div>
                </div>
           
        </section>
    );
};

export default Login;