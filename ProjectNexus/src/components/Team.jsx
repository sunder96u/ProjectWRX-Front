import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Team () {

  const BASE_URL = "https://projectwrx-back-production.uprailway.app/api/"
  const teamId = '64a2d0fbec7a43704466b667'

  const [team, setTeam] = useState([])

  useEffect(() => {
    const getTeam = async () => {
      const response = await axios.get(`${BASE_URL}team/${teamId}`)
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



  if (!team) {
    return (
        <h1> Waiting on Team to load</h1>
    )
  } else if (team) {
    if (Team) {

        return (
            <div className='background'>
                <div className='col'>
                    <button onClick={() => back()}>Return</button>
                    <button onClick={()=> updateTeam()}>Update Team</button>
                    <button onClick={()=> deleteTeam()}>Delete Team</button>
                </div>

                <div className='col'>
                    <div className='row'>
                        <p className='team-title' id="team-name">Team Name:</p>
                        <p>{team.data.name}</p>
                    </div>

                    <div className='row'>
                      <p className='team-title' id="team-leader">Team Leader:</p>
                      <p>{team.data.memberAdmin}</p>
                    </div>

                    <div className='row'>
                      <p classname='team-title' id="team-description">Team Description:</p>
                      <p>{team.data.description}</p>
                    </div>

                    <div className='row'>
                      <p className='team-title' id="team-projects">Team Projects:</p>
                      <p>{team.data.projects}</p>
                    </div>
                    <div className='row'>
                      <p className='team-title' id="team-members">Team Members:</p>
                      <p>{team.data.member}</p>
                    </div>

                </div>

            </div>
        )
    } }
  }

