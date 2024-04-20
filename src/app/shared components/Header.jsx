
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import useAuth from '@/authentication/useAuth';
import logo from '@/assets/logo.png'


const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(true);
    const handleMobileMenu = () =>{
        setMobileMenu(!mobileMenu);
        
    }

    const {user} = useAuth();

    const photoURL = user?.photoURL || {};

    return (
        <>
        <header className='sticky top-0 z-50 invisible -mt-24 lg:-mt-0 lg:visible'>
            <div className='header'>
            <div>
                <Link href={'/'} className='cursor-pointer'><Image src={logo} alt='logo' width={200}/></Link>
            </div>
            <nav>
                <ul className='nav '>
                    <Link href={'/'}  className='navLink cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="20" fill="currentColor"><path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z"></path></svg>Home</Link>
                    <Link href={'/receptionistportal'}  className='navLink cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -2 24 24" width="20" fill="currentColor"><path d="M2 0h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v16h8V2H2zm2 7h1a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z"></path></svg>Receptionist Portal</Link>
                    <Link href={'/doctorportal'}  className='navLink cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="20" fill="currentColor"><path d="M7 12.917v.583a4.5 4.5 0 1 0 9 0v-1.67a3.001 3.001 0 1 1 2 0v1.67a6.5 6.5 0 1 1-13 0v-.583A6.002 6.002 0 0 1 0 7V2a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2H2v5a4 4 0 1 0 8 0V2H9a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v5a6.002 6.002 0 0 1-5 5.917zM17 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>Doctor Portal</Link>
                    {   
                       
                       user ? <Link href={'/dashboard'} className='navLink loginButton'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4.5 24 24" width="20" fill="currentColor"><path d="M.832 14.565a9.966 9.966 0 0 1-.832-4c0-5.523 4.477-10 10-10s10 4.477 10 10a9.966 9.966 0 0 1-.832 4H.832zm9.168-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5-3a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1z"></path></svg>Dashboard
                       </Link>: 
                       <Link href={'/login'} className='navLink loginButton'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -3 24 24" width="20" fill="currentColor"><path d="M6.641 9.828H1a1 1 0 1 1 0-2h5.641l-1.12-1.12a1 1 0 0 1 1.413-1.415L9.763 8.12a.997.997 0 0 1 0 1.415l-2.829 2.828A1 1 0 0 1 5.52 10.95l1.121-1.122zM13 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z"></path></svg>Login</Link>
                   }
                </ul>
            </nav>
            </div>
            
        </header>
        <header className='sticky top-0 z-50 visible lg:invisible px-10'>
          <div className='mobileHeader '>
          <div>
                <Link href={'/'} className=' cursor-pointer'><Image src={logo} alt='logo' width={200}/></Link>
            </div>
            <nav className='relative '>
               {
                mobileMenu ? <button onClick={handleMobileMenu}><IoMdMenu className='text-2xl hover:text-secondaryColor'/></button> 
                :
                <div className='absolute right-0 -mt-3 transition duration-700 ease-in-out ' onClick={handleMobileMenu}>
                <div className='flex justify-end' >
                <button   className=''><FaMinus className='text-2xl hover:text-secondaryColor '/></button>
                </div>
                <div className=' bg-headerFooterColor w-64 h-56 rounded px-5 overflow-auto' >
               
                    <Link href={'/'}  className='mobileNavLink cursor-pointer mt-4'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="20" fill="currentColor"><path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z"></path></svg>Home</Link>
                    <Link href={'/receptionistportal'}  className='mobileNavLink cursor-pointer mt-4'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -2 24 24" width="20" fill="currentColor"><path d="M2 0h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v16h8V2H2zm2 7h1a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z"></path></svg>Receptionist Portal</Link>
                    <Link href={'/doctorportal'}  className='mobileNavLink cursor-pointer mt-4'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="20" fill="currentColor"><path d="M7 12.917v.583a4.5 4.5 0 1 0 9 0v-1.67a3.001 3.001 0 1 1 2 0v1.67a6.5 6.5 0 1 1-13 0v-.583A6.002 6.002 0 0 1 0 7V2a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2H2v5a4 4 0 1 0 8 0V2H9a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v5a6.002 6.002 0 0 1-5 5.917zM17 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>Doctor Portal</Link>                           
                {   
                       
                       user ? <Link href={'/dashboard'} className='navLink loginButton mt-4'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4.5 24 24" width="28" fill="currentColor"><path d="M.832 14.565a9.966 9.966 0 0 1-.832-4c0-5.523 4.477-10 10-10s10 4.477 10 10a9.966 9.966 0 0 1-.832 4H.832zm9.168-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5-3a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1z"></path></svg>Dashboard
                       </Link>: 
                       <Link href={'/login'} className='navLink loginButton mt-4'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -3 24 24" width="20" fill="currentColor"><path d="M6.641 9.828H1a1 1 0 1 1 0-2h5.641l-1.12-1.12a1 1 0 0 1 1.413-1.415L9.763 8.12a.997.997 0 0 1 0 1.415l-2.829 2.828A1 1 0 0 1 5.52 10.95l1.121-1.122zM13 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z"></path></svg>Login</Link>
                   }                              
                </div>
                </div>
                
               
               }
               
                
            </nav>
          </div>
            </header>
            
        </>
    );
};

export default Header;
