import React from 'react';
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/project3.png'

const Projects = () => {

    return (
         <section className='lg:mt-20 lg:mb-20'>
            <div className='container mx-auto'>
            <h1 className="text-[#145A32] text-center font-bold mb-11 mt-11 lg:text-4xl text-2xl">My Projects</h1>
               <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
               <div class="card lg:w-96 bg-base-100 shadow-xl m-3">
             <figure><img src={project1} alt="Shoes" /></figure>
            <div class="card-body">
               <h2 class="card-title">Table fan manufacture</h2>
               <p className='text-secondary font-bold'>manufacture</p>
                <p>This is a manufacture base website there customer can buy product if he/ she fullfil min quantity and available quantity  </p>
                   <div class="card-actions justify-center">
                  <button class="btn btn-primary w-full">see project detail</button>
             </div>
           </div>
           </div>
               <div class="card lg:w-96 bg-base-100 shadow-xl m-3">
             <figure><img src={project2}alt="Shoes" /></figure>
            <div class="card-body">
               <h2 class="card-title">car Inventory</h2>
               <p className='text-secondary font-bold'>Inventory</p>
                <p>This is a inventory base website there it is not e-commerce base project.
                     customer can buy a product for her business </p>
                <div class="card-actions justify-center">
                  <button class="btn btn-primary w-full">see project detail</button>
             </div>
           </div>
           </div>
               <div class="card lg:w-96 bg-base-100 shadow-xl m-3">
             <figure><img src={project3} alt="Shoes" /></figure>
            <div class="card-body">
               <h2 class="card-title">Wild photographer</h2>
               <p className='text-secondary font-bold'>single Service</p>
                <p>This website make for single service provider.he/she can provide her service for business</p>
                <div class="card-actions justify-center">
                  <button class="btn btn-primary w-full">see project detail</button>
             </div>
           </div>
           </div>
               </div>
            </div>
         </section>
    );
};

export default Projects;