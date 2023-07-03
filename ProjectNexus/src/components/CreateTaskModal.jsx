import { useState } from 'react'

const CreateTaskModal = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [completed, setCompleted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !description || !dueDate) {
      return alert('Please fill in all fields')
    }

    const taskData = {
      name,
      description,
      dueDate,
      completed,
    }

    saveTaskData(taskData)

    setName('')
    setDescription('')
    setDueDate('')
    setCompleted(false)

    alert('Task created successfully!')
  }

  return (
    <div className="task-container">
      <h2>Create a New Task</h2>
      <form onSubmit={handleSubmit}>
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

        <label htmlFor="completed">Completed:</label>
        <select
          id="completed"
          value={completed}
          onChange={(e) => setCompleted(e.target.value === 'true')}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>

        <button type="submit">Create Task</button>
      </form>
    </div>
  )
}

export default CreateTaskModal
