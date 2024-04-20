'use client'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";





const Footer = () => {
    

    return (
        <footer className='px-10 lg:px-0'>
            <div className='footer'>
            <div className='footerInfo '>
                <p className='logo mx-auto lg:mx-0'>Get In Touch</p>
                <p className='my-4 text-lg text-center lg:text-start'>I will be happy to talk with you. Just contact me by any media, which are mentioned on this website!</p>
                <ul className='socialLink mx-auto lg:ml-0 mb-8'>
                    <Link href={''} ><FaLinkedin/></Link>
                    <Link href={''} ><FaInstagramSquare /></Link>
                    <Link href={''} ><FaTwitter /></Link>
                    <Link href={''} ><FaFacebook /></Link>  
                    
                </ul>
            </div>
            <div className='boxGroup'>
                <Link href={'/receptionistportal'} className="cursor-pointer">
                <div className='box'>
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" viewBox="-6 -2 24 24" width="20" fill="currentColor"><path d="M2 0h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v16h8V2H2zm2 7h1a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z"></path></svg>
                <p className='uppercase mt-2 text-center'>Receptionist</p>
                </div>
                </Link>
               <Link href={'/doctorportal'} className="cursor-pointer">
               <div className='box'>
               <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" viewBox="-2 -2 24 24" width="20" fill="currentColor"><path d="M7 12.917v.583a4.5 4.5 0 1 0 9 0v-1.67a3.001 3.001 0 1 1 2 0v1.67a6.5 6.5 0 1 1-13 0v-.583A6.002 6.002 0 0 1 0 7V2a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2H2v5a4 4 0 1 0 8 0V2H9a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v5a6.002 6.002 0 0 1-5 5.917zM17 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>
                <p className='uppercase mt-2 text-center'>Doctor</p>
                </div>
               </Link>
            </div>
            </div>
        </footer>
    );
};

export default Footer;