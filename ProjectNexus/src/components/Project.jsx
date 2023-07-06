import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"


const Project = (props) => {
    
    const [projectId, setProjectId] = useState('')
    const [project, setProject] = useState(null)

    let { id } = useParams()

    useEffect(() => {
        let selectedProject = async() => {
            const response = await axios.get(`${BASE_URL}/project/${projectId}`)
            setTask(response)
            console.log(response)
        }
        setProject(), setProjectId()
    }, [props.project, id])


    return project ? (
        <div className="project">
            <h1>Project</h1>
            <ul>
                {props.project.map((project => (
                    <li key={project.name}>
                        <h3>Project {project.name}</h3>
                        <h3>{project.description}</h3>
                        <h3>Date Created: {project.dateCreated}</h3>
                        <h3>Date Due: {project.dateDue}</h3>
                        <h3>Lead by: {project.projectLeader}</h3>
                    </li>
                )))}
            </ul>
        </div>
    ) :null;
}

export default Project