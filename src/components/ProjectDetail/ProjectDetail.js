import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailRow from './DetailRow';

const ProjectDetail = () => {
    const {id} = useParams()
    console.log(id)
    const [projects ,setProjects] = useState([])
    useEffect(()=>{
        fetch('/projejctsInfo.json')
        .then(response=>response.json())
        .then(data=>{
            setProjects(data)
        })
    },[id])
      const projectDetail= projects.filter(projectSee=> projectSee.id == id)
      console.log(projectDetail)
    return (
    <section className="mt-40 mb-28">
       <div className='container mx-auto'>
        <div>

            {
                projectDetail.map(projectDetail =><DetailRow
              key={projectDetail.id}
              projectDetail={projectDetail}
                ></DetailRow>)
            }
        </div>
       </div>
    </section>
    );
};

export default ProjectDetail;