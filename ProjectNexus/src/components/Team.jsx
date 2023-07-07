import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Team () {

  const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"
  const teamName = useParams()
  console.log(teamName)
  console.log(teamName.teamName)
  const teamId = '64a2d0fbec7a43704466b667'
  const projectId = "64a5c7ba4e30f16593883ab1"

  const [team, setTeam] = useState([])

  useEffect(() => {
    const getTeam = async () => {
      const response = await axios.get(`${BASE_URL}team/${teamName.teamName}`)
      setTeam(response)
    }
    getTeam()
  }, [])

  console.log(team)
 
  const updateTeam = async (id) => {
    await axios.put(`${BASE_URL}team/${id}`, team)
     navigate("/")
  }
 
 
  const deleteTeam = async (id) => {
    await axios.delete(`${BASE_URL}team/${id}`)
     navigate("/")
  }
 
 
  let navigate = useNavigate()

  const back = () => {
    navigate("/")
  }

  const project = (id) => {
    navigate(`/Project/${id}`)
  }



  if (!team.data) {
    return (
        <h1> Waiting on Team to load</h1>
    )
  } else {
    if (Team) {

        return (
          <div className='teamsList'>
            <div className='background'>
                <div className='col' id="teamInfo">
                    <div className='row'>
                        <h3 className='team-Title'>Team {team.data[0].name}</h3>
                    </div>
                    {/* create map if there will be more than 1 member Admin */}
                    <div className='row'>
                      <p className='team-Title'>Team Leader:</p>
                      {/* <p>{team.data[0].memberAdmin}</p> */}
                    </div>

                    <div className='row'>
                      <p classname='team-Title'>Team Description:</p>
                      <p>{team.data[0].description}</p>
                    </div>
                    {/* create map since there will be more than 1 project/member */}
                    <div className='row' onClick={() => project(projectId)}>
                      <p className='team-Title'>Team Projects:</p>
                      <p>{team.data.projects}</p>
                    </div>
                    <div className='row'>
                      <p className='team-Title'>Team Members:</p>
                      {/* <p>{team.data.member}</p> */}
                    </div>
                </div>
                <div className='col' id='teamInfo'>
                    <button id="cancelBtn" onClick={() => back()}>Return</button>
                    <button id="cancelBtn" onClick={()=> updateTeam()}>Update Team</button>
                    <button id="deleteBtn" onClick={()=> deleteTeam()}>Delete Team</button>
                </div>
            </div>
          </div>
        )
    } }
  }


  



import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Team () {

  const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"
  const teamName = useParams()
  console.log(teamName)
  console.log(teamName.teamName)
  const teamId = '64a2d0fbec7a43704466b667'
  const projectId = "64a5c7ba4e30f16593883ab1"

  const [team, setTeam] = useState([])

  useEffect(() => {
    const getTeam = async () => {
      const response = await axios.get(`${BASE_URL}team/${teamName.teamName}`)
      setTeam(response)
    }
    getTeam()
  }, [])

  console.log(team)
 
  const updateTeam = async (id) => {
    await axios.put(`${BASE_URL}team/${id}`, team)
     navigate("/")
  }
 
 
  const deleteTeam = async (id) => {
    await axios.delete(`${BASE_URL}team/${id}`)
     navigate("/")
  }
 
 
  let navigate = useNavigate()

  const back = () => {
    navigate("/")
  }

  const project = (id) => {
    navigate(`/Project/${id}`)
  }

  const showProject = (project) => {
    navigate(`/Project/${project.name}`)
}

// const showMemberAdmin = (memberAdmin) => {
//   navigate(`/Team/${memberAdmin}`)
// }



  if (!team.data) {
    return (
        <h1> Waiting on Team to load</h1>
    )
  } else {
    if (Team) {
        console.log(team.data)
        return (
            <div className='background'>
                <div className='col'>
                    <button id="backBtn" onClick={() => back()}>Return</button>
                    <button id="updateBtn" onClick={()=> updateTeam()}>Update Team</button>
                    <button id="deleteBtn" onClick={()=> deleteTeam()}>Delete Team</button>
                </div>

                     
                     
                      {
                        team.data.map((data)=> (
                          <div key={data.memberAdmin} 
                          // onClick={()=>showMemberAdmin(memberAdmin)} 
                          className='memberAdmin'>
                            {/* mapping out teams */}
                            <div className='col'>
                              <div className='row'>
                                <p className='team-title' id="team-name">Team {data.name}</p>
                              </div>
                  
                              <div className='row'>
                                <p className='team-title' id="team-leader">Team Leader:</p>
                                <p>{data.memberAdmin}</p>
                              </div>

                              <div className='row'>
                                <p classname='team-title' id="team-description">Team Description:</p>
                                <p>{data.description}</p>
                              </div>
                            </div>
                            {/* mapping out project names */}
                            <div className='row'>
                              <p className='team-title' id="team-projects">Team Projects:</p>

                              {
                                team.data.map((project)=> (
                                  <div key={project.name} onClick={()=>showProject(project)} classname='team-projects'>
                                    <p>{project.name}</p>
                                    </div>
                                ))
                                }
                            </div>

                            {/* mapping out team members */}
                            <div className='row'>
                              <p className='team-title' id="team-members">Team Members:</p>

                                {
                                  team.data.map((member)=> (
                                    <div key={member.name} onClick={()=>showMember(member)} className='team-members'>
                                      <p>{member.name}</p>
                                    </div>
                                  ))
                                }
                            </div>

                          </div>
                        ))
                      }


                    

                    
                    {/* create map since there will be more than 1 project/member */}
                   
                   

                </div>

            
        )
    } }
  }



