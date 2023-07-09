import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../Modal.css'
import Context from '../Context'

const CreateTeamModal = ({open, onClose}) => {

  useEffect(() => {
    setMemberAdmin(userInfo.userId)
  }, [])

  const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [memberAdmin, setMemberAdmin] = useState('')
  // const [members, setMembers] = useState([])
  const { userInfo, setUserInfo } = useContext(Context)
  console.log(open)

  const teamData = {
    name,
    description,
    memberAdmin,
    // members,
  }

  let navigate = useNavigate()
 
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
    onClose()
    // setMembers([])

    alert('Team created successfully!')
  }

  if (!open) return null
  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={(e) => {e.stopPropagation()}} className="modal-container">
        <p onClick={onClose} className="closeBtn">X</p>
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
          <button type="submit" className="createBtn" id="createTeamBtn">Create Team</button>
        </form>
      </div>
    </div>
  )
}

export default CreateTeamModal
