import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import "../Task.css"

export default function TaskList () {

    const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"
    const userId = "649f2fd519a33c576d12bae3"
    const projectId = "64a2d8cfe825a5a0e353b992"

    const [completedTask, setCompletedTask] = useState([])
    const [notCompletedTask, setNotCompletedTask] = useState([])
    const [project, setProject] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {
        const getCompletedTask = async () => {
            //temp just grabbing all tasks change to by user or by project once db is correct
            const response = await axios.get(`${BASE_URL}/task`)
            setCompletedTask(response)
            const getProjectName = async () => {
                const response = await axios.get(`${BASE_URL}project/${projectId}`)
                setProject(response)
            }
            const getUserName = async () => {
                const response = await axios.get(`${BASE_URL}user/${userId}`)
                setUser(response)
            }
            getProjectName()
            getUserName()
        }
        const getNotCompletedTask = async () => {
            //temp just grabbing all tasks change to by user or by project once db is correct
            const response = await axios.get(`${BASE_URL}/task`)
            setNotCompletedTask(response)
            const getProjectName = async () => {
                const response = await axios.get(`${BASE_URL}project/${projectId}`)
                setProject(response)
            }
            const getUserName = async () => {
                const response = await axios.get(`${BASE_URL}user/${userId}`)
                setUser(response)
            }
            getProjectName()
            getUserName()
        }
        getCompletedTask()
        getNotCompletedTask()
    }, [])

    let navigate = useNavigate()

    const taskDetails = (id) => {
        navigate(`/Task/${id}`)
    }

    if (completedTask.length === 0 || notCompletedTask.length === 0 || project.length === 0 || user.length === 0) {
        return (
            <h1>Waiting on data to load</h1>
        )
    } else {

    return (
        <div className="taskList">
            <div className="row">
                <div className="col">
                    <h3 className="title">Not Completed:</h3>
                </div>
                {notCompletedTask.data.map(task => 
                    <div className="container" id="taskListNCContainer">
                        <div className="row" key={task._id} onClick={() => taskDetails(task._id)}>
                            <div className="col">
                                <h4 className="titleSmall">Task: {task.taskName}</h4>
                            </div>
                            <div className="col">
                                <p className="titleSmall">Project Name:</p>
                                <p>{project.data.name}</p>
                            </div>
                            <div className="col">
                                <p className="titleSmall">Due Date:</p>
                                <p>{task.dateDue}</p>
                            </div>
                            <div className="col">
                                <p className="titleSmall">User:</p>
                                <p>{user.data.firstName} {user.data.lastName}</p>
                            </div>
                            <div className="col">
                                <p className="titleSmall">Description:</p>
                                <p className="desc">{task.description}</p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
            <div className="row">
                <div className="col">
                    <h3 className="title">Completed:</h3>
                </div>
                {completedTask.data.map(task => 
                    <div className="row" key={task._id} onClick={() => taskDetails(task._id)}>
                        <div className="col">
                            <p className="titleSmall">Task Name:</p>
                            <p>{task.taskName}</p>
                        </div>
                         <div className="col">
                            <p className="titleSmall">Project Name:</p>
                            <p>{project.data.name}</p>
                        </div>
                        <div className="col">
                            <p className="titleSmall">Due Date:</p>
                            <p>{task.dateDue}</p>
                        </div>
                        <div className="col">
                            <p className="titleSmall">User:</p>
                            <p>{user.data.firstName} {user.data.lastName}</p>
                        </div>
                        <div className="col">
                            <p className="titleSmall">Description:</p>
                            <p className="desc">{task.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
    }
}