import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const[open ,setOpen]=useState(false)
    return (
     <section className='z-50 header bg-white'>          
    <div className='first-header shadow-xl '>
     <div className='container mx-auto flex justify-between pb-5 pt-5'>
           <div className="logo">
           <span className='text-[#145A32] text-xl font-bold pr-2 pl-2'>Arifa Choity</span>
           </div>
           <div className="">
                <div onClick={()=>setOpen(!open)} className='md:hidden pr-2'>
                   {open?<i class="fa fa-times text-primary text-2xl" aria-hidden="true"></i>
                   :<i class="fa fa-bars text-primary text-2xl" aria-hidden="true"></i>}
                </div>
                <ul className={`md:flex font-sans font-medium duration-500 
                ease-in md:static w-full absolute ${open?'top-[72px] right-0 bg-white':'top-[-300px] right-0 bg-white'}`}>
                   <Link to="/home"> <li className='md:mr-5 md:text-xl text-center md:py-0 p-3 text-primary border-y-2 md:border-y-0'>Home</li></Link>
                   <a href="/home#about"><li className='md:mr-5 md:text-xl text-center md:py-0 p-3 text-primary border-y-2 md:border-y-0'>About</li></a>
                   <a href="/home#project"><li className='md:mr-5 md:text-xl text-center md:py-0 p-3 text-primary border-y-2 md:border-y-0'>project</li></a>
                    <Link to="/Blogs"><li className='md:mr-5 md:text-xl text-center md:py-0 p-3 text-primary border-y-2 md:border-y-0'>Blogs</li></Link>
                   <a href="/home#contact"> <li className='md:mr-5 md:text-xl text-center md:py-0 p-3 text-primary border-y-2 md:border-y-0'>contact Me</li></a>
                </ul>  
            </div>
        </div>
     </div>
     </section>
    );
};

export default Header;