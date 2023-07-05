import { useState } from 'react'

const CreateProjectModal = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [teamLeader, setTeamLeader] = useState('')

  const handleSubmitProject = (e) => {
      e.preventDefault()
  
      if (!name || !description || !dueDate || !teamLeader) {
        return alert('Please fill in all fields')
      }
  
      const projectData = {
        name,
        description,
        dueDate,
        teamLeader,
      }
  
      saveProjectData(projectData)

      setName('')
      setDescription('')
      setDueDate('')
      setTeamLeader('')
  
      alert('Project created successfully!')
    }

  return (
    <div className="project-container">
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmitProject}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="dueDate">Due Date:</label>
        {/* Possibly add React datePicker */}
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <label htmlFor="teamLeader">Team Leader:</label>
        <select
          id="teamLeader"
          value={teamLeader}
          onChange={(e) => setTeamLeader(e.target.value)}
        >
          <option value="">Select a team leader</option>
          <option value="leader1">Team Leader 1</option>
          <option value="leader2">Team Leader 2</option>
          <option value="leader3">Team Leader 3</option>
        </select>

        <button type="submit">Create Project</button>
      </form>
    </div>
  )
}

export default CreateProjectModal
