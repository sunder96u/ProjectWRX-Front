import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const TeamList = (props) => {
    const BASE_URL = "https://projectwrx-back-production.uprailway.app/api/"

    const [teams, setTeams] = useState([])

    useEffect(() => {
        const getTeams = async () => {
          const response = await axios.get(`${BASE_URL}team`)
          setTeams(response)
        }
        getTeams()
      }, [])



    let navigate = useNavigate()
    const showTeam = (team) => {
        navigate(`${team.name}`)
    }

    if (!teams) {
        return <div>Loading...please wait.</div>
    } else {
        return (
            <div className='team-list'>
                {
                    teams.map((team)=> (
                        <div key={team.name} onClick={()=>showTeam(team)}
                        className='team'>
                        <h3>{team.name}</h3>
                        <ul>
                            <li>Team Leader: {team.memberAdmin}</li>
                        </ul>
                        </div>
                    ))
                }
            </div>
        )
    } }

export default TeamList