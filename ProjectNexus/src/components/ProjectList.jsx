import Project from "./Project"

export default function ProjectList (props) {
    console.log(props)
    return(
        <div className="project-list">
            <h1>Projects</h1>
                {props.map((project) => (
                    <div>
                        <ul>
                            <li key={project.name}>
                                <h3>{project.name}</h3>
                                <h3>{project.teamLeader}</h3>
                            </li>
                        </ul>
                    </div>
                ))}
        </div>
    )
}