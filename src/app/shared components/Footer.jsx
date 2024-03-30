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
                <Link href={'/contact'} className="cursor-pointer">
                <div className='box'>
                <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="20" fill="currentColor"><path d="M19.25 5.52l-8.574 7.6a1 1 0 0 1-1.331 0L.703 5.56c.064-.055.131-.105.203-.152L8.359.536a3 3 0 0 1 3.282 0l7.453 4.872c.054.035.106.073.156.113zM20 7.69V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7.698l8.014 6.916a3 3 0 0 0 3.992 0L20 7.69z"></path></svg>
                <p className='uppercase mt-2'>Email</p>
                </div>
                </Link>
               <Link href={'/articles'} className="cursor-pointer">
               <div className='box'>
               <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" viewBox="-4 -2 24 24" width="20" fill="currentColor"><path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm8 2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H3zm8-10a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z"></path></svg>
                <p className='uppercase mt-2'>Articles</p>
                </div>
               </Link>
            </div>
            </div>
        </footer>
    );
};

export default Footer;