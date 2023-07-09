import { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'

const CreateTaskModal = ({open, onClose, project}) => {
  const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"

  const [taskName, setTaskName] = useState('')
  const [description, setDescription] = useState('')
  const [dateDue, setDateDue] = useState('')
  const object = []
  
  const taskData = {
    taskName,
    description,
    dateDue,
  }

  useEffect(() => {
    const getTeamMembers = async () => {
      for (let i = 0; i < project.data.projectMembers.length; i++) {
        let userId = project.data.projectMembers[i]._id
        let userName = project.data.projectMembers.username
        const newObj = []
        newObj['value'] = userId
        newObj['label'] = userName
        object[i] = newObj
      }
    }
    getTeamMembers()
  }, [])

  const saveTaskData = async () => {
    try {
      const response = await axios.post(
        `https://projectwrx-back-production.up.railway.app/api/task/`,
        taskData
      )
      console.log('Task created successfully:', response.data)
    } catch (error) {
      console.error('Error creating Task:', error)
    }
  }

  const handleSubmitTask = (e) => {
    e.preventDefault()

    if (!taskName || !description || !dateDue) {
      return alert('Please fill in all fields')
    }

    console.log(taskData)

    saveTaskData(taskData)

    setTaskName('')
    setDescription('')
    setDateDue('')
    onClose()

    alert('Task created successfully!')
  }

  if (!open) return null

  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={(e) => {e.stopPropagation()}} className="task-container">
        <p onClick={onClose} className="closeBtn">X</p>
        <h2>Create a New Task</h2>
        <form onSubmit={handleSubmitTask}>
          <label htmlFor="taskName">NAME:</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            />

          <label htmlFor="description">DESCRIPTION:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />

          <label htmlFor="dateDue">DUE DATE:</label>
          {/* Possibly add React datePicker */}
          <input
            type="date"
            id="dateDue"
            value={dateDue}
            onChange={(e) => setDateDue(e.target.value)}
            />

          <label htmlFor="selectUser">TEAM MEMBER:</label>
          <Select 
            id="projectMembers"
            defaultValue={`Select Team Members`}
            isMulti
            options={object}
            />
          

          <button type="submit" className="createBtn">Create Task</button>
        </form>
      </div>
    </div>
  )
}

export default CreateTaskModal
