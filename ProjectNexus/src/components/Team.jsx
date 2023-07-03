import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Team = (props) => {
    
    const [team, setTeam] = useState('')
    let { name } = useParams()

    useEffect(()=> {
        let selectedTeam = props.teams.find((team) => team.name === name)
        setTeam(selectedTeam)
    }, [props.teams, name])

  return  team ? (
    <div className='team-container'>
        <div className='team-details'>
            <h1>{team.name}</h1>
        </div>

    {/* <Link to='/TeamList'>Back</Link> */}
    </div>

  ) : <h3>Finding team...</h3>
}

export default Team


