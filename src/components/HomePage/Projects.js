import React from 'react';
import useProject from '../../hooks/useProject';
import ProjectRow from './ProjectRow';

const Projects = () => {
      const [projects] = useProject([])
    return (
         <section id="project" className='lg:mt-20 lg:mb-20'>
            <div className='container mx-auto'>
            <h1 className="text-[#145A32] text-center font-bold mb-11 mt-11 lg:text-4xl text-2xl">My Projects</h1>
               <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
              projects.map(project=><ProjectRow
              key={project.id}
              project={project}
              ></ProjectRow>)
            }
               </div>
            </div>
         </section>
    );
};

export default Projects;