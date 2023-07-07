import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const TeamList = (props) => {
    const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"

    const [teams, setTeams] = useState([])

    useEffect(() => {
        const getTeams = async () => {
          const response = await axios.get(`${BASE_URL}team`)
          setTeams(response)
          console.log(response)
        }
        getTeams()
      }, [])



    let navigate = useNavigate()
    const showTeam = (team) => {
        navigate(`/Team/${team.name}`)
    }
    console.log(teams)

    if (!teams.data) {
        return <div>Loading...please wait.</div>
    } else {
        return (
            <div className='team-list'>
                <h2>TEAMS</h2>
                {
                    teams.data.teams.map((team)=> (
                        <div key={team.name} onClick={()=>showTeam(team)}
                        className='team'>
                            <h4 id="teamName">{team.name}</h4>
                            <ul>
                                <li className="leader" id="teamLeader">Team Leader: {team.memberAdmin}</li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        )
    } }

export default TeamList