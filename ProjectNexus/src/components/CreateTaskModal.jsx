import { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'

const CreateTaskModal = (props) => {
  const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"

  const [taskName, setTaskName] = useState('')
  const [description, setDescription] = useState('')
  const [dateDue, setDateDue] = useState('')
  const object = []

  console.log(props)
  
  const taskData = {
    taskName,
    description,
    dateDue,
  }

  useEffect(() => {
    const getTeamMembers = async () => {
      for (let i = 0; i < props.project.data.projectMembers.length; i++) {
        let userId = props.project.data.projectMembers[i]._id
        let userName = props.project.data.projectMembers.username
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

    alert('Task created successfully!')
  }

  return (
    <div className="task-container">
      <h2>Create a New Task</h2>
      <form onSubmit={handleSubmitTask}>
        <label htmlFor="taskName">Name:</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="dateDue">Due Date:</label>
        {/* Possibly add React datePicker */}
        <input
          type="date"
          id="dateDue"
          value={dateDue}
          onChange={(e) => setDateDue(e.target.value)}
        />

        <label htmlFor="selectUser">Team Member:</label>
        <Select 
          id="projectMembers"
          defaultValue={`Select Team Members`}
          isMulti
          options={object}
        />
        

        <button type="submit" id="createTaskBtn">Create Task</button>
      </form>
    </div>
  )
}

export default CreateTaskModal
