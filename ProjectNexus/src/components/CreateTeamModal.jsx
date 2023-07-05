import { useState } from 'react'

const CreateTeamModal = () => {
  const [teamName, setTeamName] = useState('')
  const [description, setDescription] = useState('')
  const [selectedMembers, setSelectedMembers] = useState([])

  const handleMemberChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value)
    setSelectedMembers(selectedOptions)
  }

  const handleSubmitTeam = (e) => {
    e.preventDefault()

    if (!teamName || !description || selectedMembers.length === 0) {
      return alert('Please fill in all fields and select team members')
    }

    const teamData = {
      teamName,
      description,
      selectedMembers,
    }

    saveTeamData(teamData)

    setTeamName('')
    setDescription('')
    setSelectedMembers([])

    alert('Team created successfully!')
  }

  return (
    <div className="team-container">
      <h2>Create a New Team</h2>
      <form onSubmit={handleSubmitTeam}>
        <label htmlFor="teamName">Team Name:</label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label htmlFor="teamMembers">Team Members:</label>
        <select
          id="teamMembers"
          multiple
          value={selectedMembers}
          onChange={handleMemberChange}
        >
          <option value="member1">Member 1</option>
          <option value="member2">Member 2</option>
          <option value="member3">Member 3</option>
        </select>

        <button type="submit">Create Team</button>
      </form>
    </div>
  )
}

export default CreateTeamModal
