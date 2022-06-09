import React from 'react';
import './Header.css'
const Header = () => {
    return (
     <section className='z-50 header bg-white'>          
    <div className='first-header shadow-xl '>
     <div className='container mx-auto flex justify-between pb-5 pt-5'>
           <div className="logo">
           <span className='text-[#145A32] font-bold pr-2 pl-1'>Arifa Choity</span>
           </div>
            <div className="login-sign flex items-center ">
                 <span className='text-[#145A32] font-bold lg:pr-5 pr-2'>About</span>
                 <span className='text-[#145A32] font-bold lg:pr-5 pr-2'>contact Me</span>
                 <span className='text-[#145A32] font-bold lg:pr-5 pr-2'>project </span>
                 
            </div> 
        </div>
     </div>
     </section>
    );
};

export default Header;