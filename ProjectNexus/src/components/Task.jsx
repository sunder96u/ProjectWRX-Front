import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import Context from "../Context"




export default function Task () {

    const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"
    const taskId = useParams()
    const [task, setTask] = useState([])
    const [project, setProject] = useState([])
    const [user, setUser] = useState([])
    const { userInfo, setUserInfo } = useContext(Context)
    let navigate = useNavigate()
    const isAdmin = false

    useEffect(() => {
        const getTask = async () => {
            const response = await axios.get(`${BASE_URL}task/${taskId.id}`)
            setTask(response)
            const getProjectName = async () => {
                const projectName = await axios.get(`${BASE_URL}project/${response.data.projectId}`)
                setProject(projectName)
            }
            const getUserName = async () => {
                const userName = await axios.get(`${BASE_URL}user/${response.data.userId}`)
                setUser(userName)
            }
            getProjectName()
            getUserName()
            if (project.data.teamLeader === userInfo.userId) {
                isAdmin = true
            }
        }
        getTask()
    }, [])

    const complete = (id) => {
        const update = async () => {
            await axios.put(`${BASE_URL}task?taskId=${id}&whatToUpdate=completed&update=true`)
        }
        update()
        navigate(`/TaskList/${project.data._id}`)
    }

    const notComplete = (id) => {
        const update = async () => {
            await axios.put(`${BASE_URL}task?taskId=${id}&whatToUpdate=completed&update=false`)
        }
        update()
        navigate(`/TaskList/${project.data._id}`)
    }

    const ReviewComplete = (id) => {
        const update = async () => {
            await axios.put(`${BASE_URL}task?taskId=${id}&whatToUpdate=reviewed&update=true`)
        }
        update()
        navigate(`/TaskList/${project.data._id}`)
    }

    const ReviewRejected = (id) => {
        const update = async () => {
            await axios.put(`${BASE_URL}task?taskId=${id}&whatToUpdate=completed&update=false`)
        }
        update()
        navigate(`/TaskList/${project.data._id}`)
    }

    const back = () => {
        navigate(`/TaskList/${project.data._id}`)
    }

    console.log(project)
    console.log(userInfo)

    if (task.length === 0 || project.length === 0 || user.length === 0) {
        return (
            <h1>Waiting on Task to load</h1>
        )
    } else if (!task.data.completed) {
        if (!isAdmin) {
            return (
                <div className="container" id="completedTask">
                    <div className="col">
                        <button id="backBtn" onClick={() => back()}>Return</button>
                    </div>
                    <div className="col">
                        <div className="row">
                            <p className="title"></p>
                            <p>{task.data.taskName}</p>
                        </div>
                        <div className="row">
                            <p className="title">Project Name:</p>
                            <p>{project.data.name}</p>
                        </div>
                    </div>
                    <div className="col">
                        <p className="title"> Due Date:</p>
                        <p className="date">{task.data.dateDue}</p>
                    </div>
                    <div className="col">
                        <p className="title">Description:</p>
                        <p>{task.data.description}</p>
                    </div>
                    <div className="col">
                        <button id="completeTaskBtn" onClick={() => complete(task.data._id)}>Completed</button>
                    </div>
                </div>
            )
        } else {
            return (
            <div className="container" id="notCompletedTask">
                    <div className="col">
                        <button id="backBtn" onClick={() => back()}>Return</button>
                    </div>
                <div className="col">
                    <div className="row">
                        <p className="title">Task Name:</p>
                        <p>{task.data.taskName}</p>
                    </div>
                    <div className="row">
                        <p className="title">Project Name:</p>
                        <p>{project.data.name}</p>
                    </div>
                </div>
                <div className="col">
                    <p className="title"> Due Date:</p>
                    <p className="date">{task.data.dateDue}</p>
                </div>
                <div className="col">
                    <p className="title"> Submited By:</p>
                    <p>{user.data.firstName} {user.data.lastName}</p>
                </div>
                <div className="col">
                    <p className="title">Description:</p>
                    <p>{task.data.description}</p>
                </div>
                <div className="col">
                    <button id="completeTaskBtn" onClick={() => complete(task.data._id)}>Completed</button>
                </div>
            </div>
            )
        }
    } else {
        if (!isAdmin) {
            return (
                <div className="container" id="task">
                    <div className="col">
                        <button id="backBtn" onClick={() => back()}>Return</button>
                    </div>
                    <div className="col">
                        <div className="row">
                            <p className="title">Task Name:</p>
                            <p>{task.data.taskName}</p>
                        </div>
                        <div className="row">
                            <p className="title">Project Name:</p>
                            <p>{project.data.name}</p>
                        </div>
                    </div>
                    <div className="col">
                        <p className="title"> Due Date:</p>
                        <p className="date">{task.data.dateDue}</p>
                    </div>
                    <div className="col">
                        <p className="title">Description:</p>
                        <p>{task.data.description}</p>
                    </div>
                    <div className="col">
                        <button id="completeTaskBtn" onClick={() => notComplete(task.data._id)}>Not Completed</button>
                    </div>
                </div>
            )
        } else {
            return (
            <div className="container" id="task">
                    <div className="col">
                        <button id="backBtn" onClick={() => back()}>Return</button>
                    </div>
                <div className="col">
                    <div className="row">
                        <p className="title">Task Name:</p>
                        <p>{task.data.taskName}</p>
                    </div>
                    <div className="row">
                        <p className="title">Project Name:</p>
                        <p>{project.data.name}</p>
                    </div>
                </div>
                <div className="col">
                    <p className="title"> Due Date:</p>
                    <p className="date">{task.data.dateDue}</p>
                </div>
                <div className="col">
                    <p className="title"> Submitted By:</p>
                    <p>{user.data.firstName} {user.data.lastName}</p>
                </div>
                <div className="col">
                    <p className="title">Description:</p>
                    <p>{task.data.description}</p>
                </div>
                <div className="col">
                    <button id="reviewAcptBtn" onClick={() => ReviewComplete(task.data._id)}>Reviewed & Completed</button>
                    <button id="reviewRjctBtn" onClick={() => ReviewRejected(task.data._id)}>Reviewed & Rejected</button>
                </div>
            </div>
            )   

        }
    }

}