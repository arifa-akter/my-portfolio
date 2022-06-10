import { useState ,useEffect} from "react"


const useProject = () => {
    const [projects ,setProjects] = useState([])
    useEffect(()=>{
        fetch('/projejctsInfo.json')
        .then(response=>response.json())
        .then(data=>{
            setProjects(data)
        })
    },[])
    return [projects ,setProjects]
};

export default useProject;