import React from 'react';

const DetailRow = ({projectDetail}) => {

    return (
        <div>
           <h1 className="text-primary text-center font-bold lg:text-4xl text-2xl mb-11"> {projectDetail.title}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           <div class="avatar">
           <div class="lg:w-30 rounded-xl mx-2 shadow-lg">
               <img src={projectDetail.image2} alt="" />
           </div>
           </div>
           <div class="avatar">
           <div class="lg:w-30 rounded-xl mx-2 shadow-lg">
               <img src={projectDetail.image3} alt="" />
           </div>
           </div>
           <div class="avatar">
           <div class="lg:w-30 rounded-xl mx-2 shadow-lg">
               <img src={projectDetail.image4} alt="" />
           </div>
           </div>
           </div>
           <div className='lg:w-[700px] mx-auto mt-11 px-3'>
               <p className='text-2xl font-bold text-secondary pb-6'>{projectDetail.title}</p>
               <p className='py-3'><span className='text-primary font-bold'>Website Base ON :</span> {projectDetail.name}</p>
               <h1>{projectDetail.describe2}</h1>
               <p className='py-3'><span className='text-primary font-bold'>Technology :</span>{projectDetail.technology}</p>
              <a href={projectDetail.linkSite} rel="noreferrer" target="_blank">
              <button className="btn bg-primary text-white mt-6 mr-3">Live site</button>
              </a>
              <a href={projectDetail.GitHubClientSite} rel="noreferrer" target="_blank">
              <button className="btn bg-primary text-white mt-6 mr-3"> GitHub Client site</button>
              </a>
              <a href={projectDetail.GitHubServerSite} rel="noreferrer" target="_blank">
              <button className="btn bg-primary text-white mt-6 mr-3"> GitHub server site</button>
              </a>
           </div>
            
        </div>
    );
};

export default DetailRow;