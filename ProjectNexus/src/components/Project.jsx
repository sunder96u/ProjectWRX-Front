import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
import CreateTask from './CreateTaskModal'


const Project = (props) => {
    const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"
    
    const [projectId, setProjectId] = useState('')
    const [project, setProject] = useState(null)
    const [openModal, setOpenModal] = useState(false)

    let { id } = useParams()
    console.log(props)

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

    const deleteProject = async (id) => {
        console.log(id)
        await axios.delete(`${BASE_URL}project/${id}`)
        navigate('/')
    }

    console.log(project)

    return project ? (
      <>
         <div className="indiv-Project" onClick={() => TaskList(project.data._id)}>
            <h1>Project</h1>
            <div className="project-info">
                <ul>
                    <li key={project.data.name}>
                        <p>Project {project.data.name}</p>
                        <p>Description: {project.data.description}</p>
                        <p>Date Created: {project.data.createdAt}</p>
                        <p>Date Due: {project.data.dateDue}</p>
                        <p>Team Members: {project.data.projectMembers}</p>
                        <p>Project Tasks: {project.data.taskId}</p> 
                        {/* probs not taskId or projectMembers tho */}
                    </li>
                </ul>
            </div>
        </div>
        <button className="createBtn" onClick={() => setOpenModal(true)}>Create Task</button>
        <button className="deleteBtn" onClick={() => deleteProject(project.data._id)}>Delete</button>
        {/* <button className="submit" id="addTeamMember">Add Team Member</button> */}
        <CreateTask project={project} open={openModal} onClose={() => setOpenModal(false)}/>
      </>
    ) :null;
}

export default Project
