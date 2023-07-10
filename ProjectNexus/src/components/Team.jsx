import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import CreateProject from './CreateProjectModal'

export default function Team () {

  const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"
  const teamName = useParams()

  const [team, setTeam] = useState([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const getTeam = async () => {
      const response = await axios.get(`${BASE_URL}team/${teamName.teamName}`)
      setTeam(response)
    }
    getTeam()
  }, [])
 
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

  const showProject = (id) => {
    navigate(`/Project/${id}`)
  }

//   const showProject = (project) => {
//     navigate(`/Project/${project}`)
// }

// const showMemberAdmin = (memberAdmin) => {
//   navigate(`/Team/${memberAdmin}`)
// }

console.log(team)

  if (!team.data) {
    return (
        <h1> Waiting on Team to load</h1>
    )
  } else {
    if (Team) {
        console.log(team.data)
        return (
          <div className='teamsListContainer'>
            <div className='teamsList'>
              {/* above classname may need to be changed to background */}
              {
                team.data.map((data)=> (
                <div key={data.name} 
                // onClick={()=>showMemberAdmin(memberAdmin)} 
                  className='teamInfo'>
                    {/* ABOVE CLASSNAME MAY NEED TO BE MEMBERADMIN BUT PRETTY SURE I GOT RID OF THAT CLASS */}
                        {/* mapping out teams */}
                    <div className='col'>
                      <div className='row'>
                        <h3 className='teamHeader' id="team-name">Team {data.name}</h3>
                      </div>
                      <div className='row'>
                        <p className='team-title' id="team-leader">Team Leader:</p>
                        <p>{data.memberAdmin[0].username}</p>
                      </div>
                      <div className='row'>
                        <p className='team-title'>Team Description:</p>
                        <p>{data.description}</p>
                      </div>
                    </div>
                    {/* mapping out project names */}
                    <div className='row'>
                      <p className='team-title' id="team-projects">Team Projects:</p>
                      {
                        team.data[0].projects.map((project)=> (
                          <div key={project.name} onClick={() => showProject(project._id)} classname='team-projects'>
                            <ul>
                              <li>
                                <a className='indProject'>{project.name}</a>
                              </li>
                            </ul>
                            </div>
                        ))
                        }
                    </div>
                    {/* mapping out team members */}
                    <div className='row'>
                      <p className='team-title' id="team-members">Team Members:</p>
                        {
                          team.data[0].member.map((member)=> (
                            <div key={member.username} onClick={() => showMember(member)} className='team-members'>
                              <p>{member.username}</p>
                            </div>
                          ))
                        }
                    </div>
                  </div>
              ))
            }
              {/* create map since there will be more than 1 project/member */}
            <CreateProject open={openModal} onClose={() => setOpenModal(false)} myTeamId={team.data[0]._id}/>
            <div className='teamButtons'>
                <button className="createBtn" onClick={()=> updateTeam(team.data[0]._id)}>Update Team</button>
                <button className="deleteBtn" onClick={()=> deleteTeam(team.data[0]._id)}>Delete Team</button>
                <button className="submit" id="addBtn" onClick={()=> setOpenModal(true)}> Add Project</button>
                <button className="backBtn" onClick={() => back()}>Return</button>
            </div>
            </div>
          </div>
        )
    } }
  }
