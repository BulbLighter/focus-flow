import { useState } from 'react'
//function passed from parent(App.jsx) 
//to handle the actual API call
function TaskForm({ onTaskAdded }){
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')

  const handleSubmit = (e) => {
    e.preventDefault()//stops page from refreshing on submit
    if (!title.trim()) return
    //prevents empty tasks
    onTaskAdded({ title, priority })
    setTitle('')
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        //onchange updates state as user types
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  )
}

export default TaskForm