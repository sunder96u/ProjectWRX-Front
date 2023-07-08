import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
import CreateTask from './CreateTaskModal'


const Project = (props) => {
    const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"
    
    const [projectId, setProjectId] = useState('')
    const [project, setProject] = useState(null)

    let { id } = useParams()

    useEffect(() => {
        let selectedProject = async() => {
            const response = await axios.get(`${BASE_URL}/project/${id}`)
            setProject(response)

        }
        setProject(), setProjectId()
        selectedProject()
    }, [props.project, id])

    let navigate = useNavigate()

    const TaskList = (id) => {
        navigate(`/TaskList/${id}`)
    }

    console.log(project)

    return project ? (
        <>
                <div className="indiv-Project" onClick={() => TaskList(project.data._id)}>
            <h1>Project</h1>
            <div className="project-info">
                <ul>
                    <li key={project.data.name}>
                        <h3>Project {project.data.name}</h3>
                        <h3>Description: {project.data.description}</h3>
                        <h3>Date Created: {project.data.createdAt}</h3>
                        <h3>Date Due: {project.data.dateDue}</h3>
                    </li>
                </ul>
            </div>
        </div>
        <button>Create Task</button>
        <button>Add TeamMember</button>
        <CreateTask project={project}/>
        </>

    ) :null;
}

export default Project
