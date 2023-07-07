// import { useNavigate } from 'react-router-dom'

// const ProjectList = (props) => {

//     let navigate = useNavigate()
//     const showProject = (project) => {
//         navigate(`${project.name}`)
//     }

//     if (!props.projects) {
//         return <div>Loading.. please wait.</div>
//     } else {
//         return (
//             <div className="project-list">
//             <h1>Projects</h1>
//                 {props.projects.map((project) => (
//                     <div>
//                         <ul>
//                             <li key={project.name} onClick={() => showProject(project)} classname='projects'>
//                                 <h3>{project.name}</h3>
//                                 <h3>{project.description}</h3>
//                                 <h3>{project.projectLeader}</h3>
//                                 <h3>{project.dateDue}</h3>
//                             </li>
//                         </ul>
//                     </div>
//                 ))}
//         </div>
//         )
//     }
// }

// export default ProjectList










import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const ProjectList = (props) => {
    const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"

    const [projects, setProjects] = useState([])

    useEffect(() => {
        const getProjects = async () => {
          const response = await axios.get(`${BASE_URL}project`)
          setProjects(response)
          console.log(response)
        }
        getProjects()
      }, [])



    let navigate = useNavigate()
    const showProject = (project) => {
        navigate(`/Project/${project.name}`)
    }
    console.log(projects)

    if (!projects.data) {
        return <div>Loading...please wait.</div>
    } else {
        return (
            <div className='project-list'>
                {
                    projects.data.projects.map((project)=> (
                        <div key={project.name} onClick={()=>showProject(project)}
                        className='project'>
                            <h3>{project.name}</h3>
                            <ul>
                                <li>Description: {project.description}</li>
                                <li>Project Leader: {project.projectLeader}</li>
                                <li>Project Due Date: {project.dateDue}</li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        )
    } }

export default ProjectList