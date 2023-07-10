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
         <div onClick={() => TaskList(project.data._id)}>
            <div className="projectInfo">
                <ul id="projectUL">
                    <li className="indivProject" key={project.data.name}>
                        <div className="projectContainer">
                            <h2 className="project">Project: {project.data.name}</h2>
                            <p>Description: </p>
                            <p>{project.data.description}</p>
                            <p>Date Created:</p>
                            <p>{project.data.createdAt}</p>
                            <p>Date Due:</p>
                            <p>{project.data.dateDue}</p>
                            <p>Team Members: </p>
                            <p>{project.data.projectMembers}</p>
                            <p>Project Tasks: </p>
                            <p>{project.data.taskId}</p> 
                            <button className="createBtn" id="createProj" onClick={() => setOpenModal(true)}>Create Task</button>
                            <button className="deleteBtn" onClick={() => deleteProject(project.data._id)}>Delete</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <CreateTask project={project} open={openModal} onClose={() => setOpenModal(false)}/>
      </>
    ) :null;
}

export default Project
