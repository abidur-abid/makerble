
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import useAuth from '@/authentication/useAuth';


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
                <Link href={'/'} className='hover:text-secondaryColor cursor-pointer'><h1 className='logo'>SHS</h1></Link>
            </div>
            <nav>
                <ul className='nav '>
                    <Link href={'/'}  className='navLink cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1.5 24 24" width="20" fill="currentColor"><path d="M13 20.565v-5a3 3 0 0 0-6 0v5H2a2 2 0 0 1-2-2V7.697a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.697v10.868a2 2 0 0 1-2 2h-5z"></path></svg>Home</Link>
                    <Link href={'/education'}  className='navLink cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-3.5 -1 24 24" width="20" fill="currentColor"><path d="M1.32 13.211a6.995 6.995 0 0 1 .594-6.757C3.356 4.317 8.08 2.433 16.084.801c-.268 6.851-1.122 11.345-2.563 13.482a7 7 0 0 1-9.467 2.05 7.563 7.563 0 0 1 2.27-2.482l.507-.352a2 2 0 1 0-2.278-3.288l-.507.352A11.56 11.56 0 0 0 1.32 13.21zm.746 6.86a1 1 0 1 1-2 0c0-3.466 1.7-6.712 4.55-8.686l.507-.352a1 1 0 0 1 1.139 1.644l-.507.352a8.567 8.567 0 0 0-3.689 7.042z"></path></svg>Education</Link>
                    <Link href={'/experience'}  className='navLink cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1.5 24 24" width="20" fill="currentColor"><path d="M10 20.858c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm-3.92-6.606a4.264 4.264 0 0 0 7.84 0 1 1 0 1 0-1.84-.788 2.264 2.264 0 0 1-4.16 0 1 1 0 1 0-1.84.788zM7 6.858a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1zm6 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"></path></svg>Experience</Link>
                    <Link href={'/articles'} className='navLink cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" width="20" fill="currentColor"><path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm8 2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H3zm8-10a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z"></path></svg>Articles</Link> 
                    <Link href={'/contact'} className='navLink cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="20" fill="currentColor"><path d="M19.25 5.52l-8.574 7.6a1 1 0 0 1-1.331 0L.703 5.56c.064-.055.131-.105.203-.152L8.359.536a3 3 0 0 1 3.282 0l7.453 4.872c.054.035.106.073.156.113zM20 7.69V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7.698l8.014 6.916a3 3 0 0 0 3.992 0L20 7.69z"></path></svg>Contact</Link>
                    {   
                       
                       user ? <Link href={'/dashboard'}><Image src={photoURL} width={50} height={50} alt='' className='rounded-full'/>
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
                <Link href={'/'} className='hover:text-secondaryColor cursor-pointer'><h1 className='logo'>MR</h1></Link>
            </div>
            <nav className='relative '>
               {
                mobileMenu ? <button onClick={handleMobileMenu}><IoMdMenu className='text-2xl hover:text-secondaryColor'/></button> 
                :
                <div className='absolute right-0 -mt-3 transition duration-700 ease-in-out ' onClick={handleMobileMenu}>
                <div className='flex justify-end' >
                <button   className=''><FaMinus className='text-2xl hover:text-secondaryColor '/></button>
                </div>
                <div className=' bg-headerFooterColor w-52 h-72 rounded px-5 overflow-auto' >
                <Link href={'/'} className='mobileNavLink cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1.5 24 24" width="20" fill="currentColor"><path d="M13 20.565v-5a3 3 0 0 0-6 0v5H2a2 2 0 0 1-2-2V7.697a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.697v10.868a2 2 0 0 1-2 2h-5z"></path></svg>Home</Link>
                <Link href={'/education'}  className='mobileNavLink cursor-pointer mt-4'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-3.5 -1 24 24" width="20" fill="currentColor"><path d="M1.32 13.211a6.995 6.995 0 0 1 .594-6.757C3.356 4.317 8.08 2.433 16.084.801c-.268 6.851-1.122 11.345-2.563 13.482a7 7 0 0 1-9.467 2.05 7.563 7.563 0 0 1 2.27-2.482l.507-.352a2 2 0 1 0-2.278-3.288l-.507.352A11.56 11.56 0 0 0 1.32 13.21zm.746 6.86a1 1 0 1 1-2 0c0-3.466 1.7-6.712 4.55-8.686l.507-.352a1 1 0 0 1 1.139 1.644l-.507.352a8.567 8.567 0 0 0-3.689 7.042z"></path></svg>Education</Link>
                <Link href={'/experience'}  className='mobileNavLink cursor-pointer mt-4'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1.5 24 24" width="20" fill="currentColor"><path d="M10 20.858c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm-3.92-6.606a4.264 4.264 0 0 0 7.84 0 1 1 0 1 0-1.84-.788 2.264 2.264 0 0 1-4.16 0 1 1 0 1 0-1.84.788zM7 6.858a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1zm6 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"></path></svg>Experience</Link>
                <Link href={'/articles'} className='mobileNavLink mt-4 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" width="20" fill="currentColor"><path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm8 2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H3zm8-10a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z"></path></svg>Articles</Link> 
                <Link href={'/contact'} className='mobileNavLink mt-4 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="20" fill="currentColor"><path d="M19.25 5.52l-8.574 7.6a1 1 0 0 1-1.331 0L.703 5.56c.064-.055.131-.105.203-.152L8.359.536a3 3 0 0 1 3.282 0l7.453 4.872c.054.035.106.073.156.113zM20 7.69V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7.698l8.014 6.916a3 3 0 0 0 3.992 0L20 7.69z"></path></svg>Contact</Link>                              
                {   
                       
                       user ? <Link href={'/dashboard'}><Image src={photoURL} width={40} height={40} alt='' className='rounded-full mt-4 mx-auto'/>
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
