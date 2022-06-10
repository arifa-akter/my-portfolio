import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectRow = ({project}) => {
    const {id ,name ,title ,image1 ,describe1} = project
    const navigate = useNavigate()
    const seeDetail =(id)=>{
    console.log(id)
    navigate(`/detail/${id}`)
    }
    return (
     <div class="card lg:w-96 bg-base-100 shadow-xl m-3">
       <figure><img src={image1} alt="Shoes" /></figure>
       <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p className='text-secondary font-bold'>{name }</p>
           <p>{describe1}</p>
              <div className="card-actions justify-center">
             <button onClick={()=>seeDetail(id)} className="btn btn-primary w-full">see project detail</button>
        </div>
        </div>
      </div>
    );
};

export default ProjectRow;