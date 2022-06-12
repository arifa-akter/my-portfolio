import React from 'react';
// import photo  from '../../images/photo.jpg'
const About = () => {
    return (
     <section id="about" className='lg:mt-28 lg:mb-28  shadow-lg pb-11'>
         <div className='container mx-auto'>
         <h1 className="text-[#145A32] text-center font-bold mb-11 mt-11 lg:text-4xl text-2xl">About</h1>
         <div className="grid grid-cols-1 lg:w-[600px] mx-auto">
        
             <div className='flex justify-center items-center'>
                  <div className='p-5'>
                  <h1 className="mb-3 lg:text-3xl text-2xl">Arifa Akter choity</h1>
                  <h1 className='text-secondary text-xl font-bold'>mern stack developer</h1>
                  <p className='pb-5'>Hi i am arifa akter choity , l explore myself as designer and developer .
                   I always improve my skill and try to improve myself everyday as web developer.coding gives me pleaser.
                   </p>
                  <p className='pb-5'>I love to draw along with this l also enjoy traveling and exploring the ever green nature .
                  I love to communicate with people specially with children.</p>
                  <p>
                  <a  href="https://www.linkedin.com/in/arifa-choity-905182241/"  rel="noreferrer" target="_blank" >
                  <i class="fa fa-linkedin-square pr-5 text-xl text-primary" aria-hidden="true"></i>
                  </a>
                  <a  href="https://github.com/arifa-akter"  rel="noreferrer" target="_blank" >
                  <i class="fa fa-github-square pr-5 text-xl text-primary" aria-hidden="true"></i>
                  </a>

                  
                  </p>
                  </div>
             </div>
         </div>
         </div>
     </section>
    );
};

export default About;