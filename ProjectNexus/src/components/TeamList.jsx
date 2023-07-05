import { useNavigate } from 'react-router-dom'

const TeamList = (props) => {

    let navigate = useNavigate()
    const showTeam = (team) => {
        navigate(`${team.name}`)
    }

    if (!props.teams) {
        return <div>Loading...please wait.</div>
    } else {
        return (
            <div className='team-list'>
                {
                    props.teams.map((team)=> (
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