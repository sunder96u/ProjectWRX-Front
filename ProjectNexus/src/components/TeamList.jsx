import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CreateTeam from './CreateTeamModal'


const TeamList = () => {
 
    useEffect(() => {
        const getTeams = async () => {
          const response = await axios.get(`${BASE_URL}team`)
          setTeams(response)
          console.log(response)
        }
        getTeams()
      }, [])

      const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"

      const [teams, setTeams] = useState([])
      const [openModal, setOpenModal] = useState(false)

    let navigate = useNavigate()
    const showTeam = (team) => {
        navigate(`/Team/${team.name}`)
    }
    console.log(teams)

    if (!teams.data) {
        return <div>Loading...please wait.</div>
    } else {
        return (
            <>
                <div className='team-list'>
                    <h2>TEAMS</h2>
                    {
                        teams.data.teams.map((team)=> (
                            <div key={team.name} onClick={()=>showTeam(team)}
                            className='team'>
                                <div className='allTeamInfo'>
                                    <h4 id="teamName">{team.name}</h4>
                                    <ul>
                                        <li className="leader" id="teamLeader">Team Leader: {team.memberAdmin[0].username}</li>
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                    <button className="createBtn" onClick={() => setOpenModal(true)}>Create Team</button>
                </div>
                <CreateTeam open={openModal} onClose={() => setOpenModal(false)}/>
            </>
        )
    } }

export default TeamList
