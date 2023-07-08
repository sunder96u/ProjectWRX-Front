import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../Modal.css'
import Context from '../Context'

const CreateTeamModal = () => {
  const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [memberAdmin, setMemberAdmin] = useState('')
  // const [members, setMembers] = useState([])
  const { userInfo, setUserInfo } = useContext(Context)

  const teamData = {
    name,
    description,
    memberAdmin
    // members,
  }

  let navigate = useNavigate()
 
  useEffect(() => {
    setMemberAdmin(userInfo.userId)
  }, [])

  const saveTeamData = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}team/`,
        teamData
      )
      navigate("/")
      console.log('Team created successfully:', response.data)
    } catch (error) {
      console.error('Error creating team:', error)
    }
  }

  const handleSubmitTeam = (e) => {
    e.preventDefault()

    if (!name || !description) {
      return alert('Please fill in all fields and select team members')
    }
    saveTeamData(teamData)
    setName('')
    setDescription('')
    setMemberAdmin('')
    // setMembers([])

    alert('Team created successfully!')
  }

  return (
    <div className="modal-container">
      <h2>Create a New Team</h2>
      <form onSubmit={handleSubmitTeam}>
        <label htmlFor="teamName">Team Name:</label>
        <input
          type="text"
          id="teamName"
          placeholder='Team Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button type="submit" id="createTeamBtn">Create Team</button>
      </form>
    </div>
  )
}

export default CreateTeamModal
