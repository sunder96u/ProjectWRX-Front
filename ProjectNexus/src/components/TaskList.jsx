import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import "../Task.css"

export default function TaskList () {

    const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"

    const [completedTask, setCompletedTask] = useState([])
    const [notCompletedTask, setNotCompletedTask] = useState([])
    const [project, setProject] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {
        const getCompletedTask = async () => {
            const response = await axios.get(`${BASE_URL}/task/completed/completed`)
            setCompletedTask(response)
            console.log(`${response} completedTasks`)
            const getProjectName = async () => {
                const projectName = await axios.get(`${BASE_URL}project/${response.data[0].projectId}`)
                setProject(projectName)
            }
            const getUserName = async () => {
                const userName = await axios.get(`${BASE_URL}user/${response.data[0].userId}`)
                setUser(userName)
            }
            getProjectName()
            getUserName()
        }
        const getNotCompletedTask = async () => {
            const response = await axios.get(`${BASE_URL}/task/notCompleted/notCompleted`)
            setNotCompletedTask(response)
            console.log(`${response} notCompletedTasks`)
            const getProjectName = async () => {
                const projectName = await axios.get(`${BASE_URL}project/${response.data[0].projectId}`)
                setProject(projectName)
            }
            const getUserName = async () => {
                const userName = await axios.get(`${BASE_URL}user/${response.data[0].userId}`)
                setUser(userName)
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
        <div className="taskContainer">
            <div className="row">
                <div className="col">
                    <h3 className="taskTitle">Not Completed:</h3>
                </div>
                {notCompletedTask.data.map(task => 
                    <div className="taskBox" id="taskListNCContainer">
                        <div className='taskInner'>
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
                    </div>
                )}

            </div>
            <div className="row">
                <div className="col">
                    <h3 className="taskTitle">Completed:</h3>
                </div>
                {completedTask.data.map(task => 
                    <div className="taskBox" key={task._id} onClick={() => taskDetails(task._id)}>
                        <div className='taskInner'>
                            <div className="col">
                                <h4 className="titleSmall">Task Name: {task.taskName}</h4>
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
        </div>
    )
    }
}