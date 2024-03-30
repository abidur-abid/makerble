'use client'
import useAuth from '@/authentication/useAuth';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { startTransition } from 'react';
import toast from 'react-hot-toast';
import { CgProfile } from "react-icons/cg";



const DashboardHero = () => {

    const {user, logout} = useAuth();
    const { displayName, photoURL } = user || {};

    const { replace, refresh } = useRouter();
    const path = usePathname();

    const handleLogout = async () => {
        const toastId = toast.loading("Loading...");
        try {
          await logout();
          const res = await fetch("/api/auth/logout", {
            method: "POST",
          });
          await res.json();
          if (path.includes("/dashboard") || path.includes("/projects")) {
            replace(`/login?redirectUrl=${path}`);
          }
          toast.dismiss(toastId);
          toast.success("Successfully logout!");
          startTransition(() => {
            refresh();
          });
        } catch (error) {
          toast.error("Successfully not logout!");
          toast.dismiss(toastId);
        }
      };

    return (
        <section className='mb-8'>
            <div >
            {
            user ? <Image src={photoURL} width={160} height={160} className='rounded-full mx-auto border-slate-300 text-secondaryColor border-4'/>
            : <CgProfile className='w-40 h-40 rounded-full mx-auto border-slate-300 text-secondaryColor border-4'/>
           }
           
           
            </div>
            <h1 className='text-xl text-center  mt-4'></h1>
            <div className='flex justify-center'>
                <h2 className='text-3xl text-center  mt-2 rounded font-bold uppercase'>{displayName}</h2>
            </div>
            <div className='flex justify-center mt-4'>
                <button onClick={handleLogout}  className='button'>Logout</button>
            </div>
        </section>
    );
};

export default DashboardHero;