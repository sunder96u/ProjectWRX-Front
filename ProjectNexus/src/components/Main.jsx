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
import Profile from './Profile'


export default function Main () {

    const [user, setUser] = useState("")
    const { userInfo, setUserInfo } = useContext(Context)
    console.log(userInfo)

    if (userInfo.username === '') {
        return (
            <>
            <Routes>
                <Route path="/" element={<Login />}/>
                {/* <Route path="/CreateUser" element={<CreateAccount />}/> */}
                <Route path="/Profile" element={<Profile />} />
            </Routes>
            </>
        )
    } else {
        return (
            <>
            <Routes>
                <Route path="/" element={<TeamList />}/>
                <Route path="/Team/:teamName" element={<Team />}/>
                <Route path="/Project/:id" element={<Project />}/>
                <Route path="/ProjectList" element={<ProjectList />}/>
                <Route path="/Profile/:id" element={<Profile />} />
                <Route path="/Task/:id" element={<Task />}/>
                <Route path="/TaskList/:projId" element={<TaskList />}/>
                <Route path="/TaskList" element={<TaskList />} />
            </Routes>
            </>
        )
    }
}
