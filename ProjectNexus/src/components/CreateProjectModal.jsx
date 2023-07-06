import { useState } from 'react'
import axios from 'axios'

const CreateProjectModal = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [dateDue, setDateDue] = useState('')
  
  const projectData = {
    name,
    description,
    dateDue,
  }
  const saveProjectData = async () => {
    try {
      const response = await axios.post(
        `https://projectwrx-back-production.up.railway.app/api/project/`,
        projectData
      )
      console.log('Project created successfully:', response.data)
    } catch (error) {
      console.error('Error creating project:', error)
    }
  }

  const handleSubmitProject = (e) => {
    e.preventDefault()

    if (!name || !description || !dateDue) {
      return alert('Please fill in all fields')
    }

    console.log(projectData)

    saveProjectData(projectData)

    setName('')
    setDescription('')
    setDateDue('')

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
        <input
          type="date"
          id="dueDate"
          value={dateDue}
          onChange={(e) => setDateDue(e.target.value)}
        />

        {/* Add the dropdown to choose project leader here */}
        {/* Replace `projectLeader` state and onChange handler accordingly */}

        <button type="submit" id="createProjBtn">Create Project</button>
      </form>
    </div>
  )
}

export default CreateProjectModal

