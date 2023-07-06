import { Routes, Route } from 'react-router-dom'
import { useState, useContext } from 'react'
import Login from './Login'
import CreateAccount from './CreateAccount'
import CreateProjectModal from './CreateProjectModal'
import CreateTaskModal from './CreateTaskModal'
import CreateTeamModal from './CreateTeamModal'
import Project from './Project'
import ProjectList from './ProjectList'
import Task from './Task'
import TaskList from './TaskList'
import Team from './Team'
import TeamList from './TeamList'
import Context from '../Context'



export default function Main () {

    const [user, setUser] = useState("")
    const { userInfo, setUserInfo } = useContext(Context)

    if (userInfo.username === '') {
        return (
            <>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/CreateUser" element={<CreateAccount />}/>
            </Routes>
            </>

        )
    } else {
        return (
            <>
            <Routes>
                <Route path="/" element={<Team />}/>
                <Route path="/TeamList" element={<TeamList />}/>
                <Route path="/Project" element={<Project />}/>
                <Route path="/ProjectList" element={<ProjectList />}/>
                <Route path="/Task" element={<Task />}/>
                <Route path="/TaskList" element={<TaskList />}/>
                <Route path="CreateProjectModal" element={<CreateProjectModal />}/>
                <Route path="CreateTaskModal" element={<CreateTaskModal />}/>
                <Route path="CreateTeamModal" element={<CreateTeamModal />}/> 
            </Routes>
            </>
        )
    }

}
