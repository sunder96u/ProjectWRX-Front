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
        }
        getProjects()
      }, [])


    let navigate = useNavigate()
    const showProject = (id) => {
        navigate(`/Project/${id}`)
    }

    if (!projects.data) {
        return <div>Loading...please wait.</div>
    } else {
        return (
            <div className='project-list'>
                <h2>Projects</h2>
                {
                    projects.data.map((project)=> (
                        <div key={project.name} className='project-info' onClick={()=>showProject(project)}>
                            <div className='projectBox'>
                                <h3>{project.name}</h3>
                                <ul className='projectUL'>
                                    <li>Description: {project.description}</li>
                                    <li>Project Leader: {project.teamLeader}</li>
                                    <li>Project Due Date: {project.dateDue}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    } }

export default ProjectList
