import { useNavigate } from 'react-router-dom'

const ProjectList = (props) => {

    let navigate = useNavigate()
    const showProject = (project) => {
        navigate(`${project.name}`)
    }

    if (!props.projects) {
        return <div>Loading.. please wait.</div>
    } else {
        return (
            <div className="project-list">
            <h1>Projects</h1>
                {props.projects.map((project) => (
                    <div>
                        <ul>
                            <li key={project.name} onClick={() => showProject(project)} classname='projects'>
                                <h3>{project.name}</h3>
                                <h3>{project.description}</h3>
                                <h3>{project.projectLeader}</h3>
                                <h3>{project.dateDue}</h3>
                            </li>
                        </ul>
                    </div>
                ))}
        </div>
        )
    }
}

export default ProjectList