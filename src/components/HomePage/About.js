import React from 'react';
// import photo from '../../images/photo.jpg'
const About = () => {
    return (
     <section  className='lg:mt-28 lg:mb-28'>
         <div className='container mx-auto'>
         <h1 className="text-[#145A32] text-center font-bold mb-11 mt-11 lg:text-4xl text-2xl">About</h1>
         <div className="grid grid-cols-1 lg:grid-cols-2">
             <div className='flex justify-center'>
             <div class="avatar">
              <div class="w-30 mask mask-hexagon">
                       <img src="https://api.lorem.space/image/face?hash=55350" alt=""/>
               </div>
            </div>
             </div>
             <div className='flex justify-center items-center'>
                  <div className='p-5'>
                  <h1 className="mb-3 lg:text-3xl text-2xl">Arifa Akter choity</h1>
                  <h1 className='text-secondary text-xl font-bold'>mern stack developer</h1>
                  <p className='pb-5'>I loved designing things, so I started designing websites to improve my skills. This meant that I had to create something new every week, which was a little better for each project.</p>
                  <p className='pb-5'>I've heard of WordPress before, but I haven't really looked into it. It all changed when we decided it was time to expand our skill set to realize our website design project.</p>
                  <p>
                  <i class="fa fa-facebook pr-5 text-xl text-primary" aria-hidden="true"></i>
                  <i class="fa fa-linkedin-square pr-5 text-xl text-primary" aria-hidden="true"></i>
                  <i class="fa fa-instagram pr-5 text-xl text-primary" aria-hidden="true"></i>
                  </p>
                  </div>
             </div>
         </div>
         </div>
     </section>
    );
};

export default About;