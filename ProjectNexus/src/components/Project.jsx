export default function Project (props) {
    console.log(props)
    return(
        <div className="project">
            <h1>Project</h1>
            <ul>
                {props.map((project) => (
                    <li key={project.name}>
                        <h3>Project {project.name}</h3>
                        <h3>{project.description}</h3>
                        <h3>Date Created: {project.dateCreated}</h3>
                        <h3>Date Due: {project.dateDue}</h3>
                        <h3>Lead by: {project.projectLeader}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}