import { useState } from 'react'
import axios from 'axios'

const CreateTaskModal = () => {
  const [taskName, setTaskName] = useState('')
  const [description, setDescription] = useState('')
  const [dateDue, setDateDue] = useState('')
  
  const taskData = {
    taskName,
    description,
    dateDue,
  }

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
        

        <button type="submit" id="createTaskBtn">Create Task</button>
      </form>
    </div>
  )
}

export default CreateTaskModal
