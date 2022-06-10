import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css'
const Banner = () => {
    return (
     <section id="banner"className='banner-bg'>
            <div className="container mx-auto">
                {/* <div className='flex justify-center mb-7'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                         <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                    </div>
                </div>
                </div> */}
               <div className='flex justify-center'>
                   <div>
                     <h1 className="text-[#145A32] text-center font-bold lg:text-4xl text-2xl"> I am Arifa Akter Choity </h1>
                     <h1 className="text-[#D4AC0D] text-center font-bold lg:text-4xl text-2xl pt-3">Junior mern stack web Devloper</h1>
                    <p className='mt-6 lg:ml-40 ml-10'>
                      <Link to="/contact"><button className="btn btn-primary mr-6">contact Me</button></Link>
                      
                          <a  href="https://drive.google.com/file/d/1iRP0p58Lr0_rr8ZRme0q0JYfT7dcvUy8/view?usp=sharing"  rel="noreferrer" target="_blank" >
                          <button class="btn btn-secondary text-white">Resume </button> 
                          </a>
                 
                    </p>
                   </div>
               </div>
             </div>
       
     </section>
    );
};

export default Banner;