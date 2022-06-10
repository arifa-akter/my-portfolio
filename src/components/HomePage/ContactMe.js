import React from 'react';
import contactMe from '../../images/contactMe.png'

const ContactMe = () => {
    return (
        <section id="contact" className='lg:mt-28 lg:mb-28 mt-28'>
            <div className="container mx-auto">
            <h1 className="text-[#145A32] text-center font-bold mb-20 mt-11 lg:text-4xl text-2xl">Contact Me</h1>
             <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 m-3' >
               <div>
                   <img src={contactMe} className="w-full h-full" alt="" />
               </div>
               <div className='flex justify-center'>
                   <div className=''>
                       <form action="">
                       <div class="form-control mx-3 lg:mx-0">
                                 <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                       <input type="text" placeholder="please enter Name" class="input input-bordered w-full max-w-xs" />
                       <label class="label">
                       </label>
                       </div>
                       <div class="form-control mx-3 lg:mx-0">
                                 <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                       <input type="email" placeholder="please enter email" class="input input-bordered w-full max-w-xs" />
                       <label class="label">
                       </label>
                       </div>
                       <div class="form-control mx-3 lg:mx-0">
                         <label class="label">
                          <span class="label-text">Description</span>
                        </label> 
                          <textarea class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        </div>
                      
                       <button class="btn block w-80 mt-5 bg-primary">send</button>
                       </form>
                   </div>
               </div>
             </div>
             <div className='grid lg:grid-cols-2 grid-cols-1 mt-11 gap-2'>
         <div className='justify-center flex'>
         <div class="card w-96 bg-base-100 shadow-xl">
                 <div class="card-body">
                 <i class="fa fa-phone text-5xl text-secondary" aria-hidden="true"></i>
                    <h2 class="card-title">Phone</h2>
                     <p>phone 01765518176</p>
                  </div>
               </div>
         </div>
         <div className='justify-center flex'>
         <div class="card w-96 bg-base-100 shadow-xl">
                 <div class="card-body">
                 <i class="fa fa-envelope-o text-5xl text-secondary" aria-hidden="true"></i>
                    <h2 class="card-title">Email</h2>
                     <p>email : arifaakterchoity@gamil.com</p>
                  </div>
               </div>
         </div>
             </div>
            </div>
        </section>
    );
};

export default ContactMe;