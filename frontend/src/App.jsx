import { useState, useEffect } from 'react'
import axios from 'axios'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

//Axios is used to make API calls to backend 

const API = 'http://localhost:5000/api/tasks'

function App() {
//useState sets the state as empty array in the beginning
const [tasks, setTasks] = useState([])

//useEffect runs when page loads
useEffect(() =>{
//fetch tasks from backend and store them in a state
  axios.get(API).then(res => setTasks(res.data))
}, [])

//POST to backend, adds new task to state
const addTask = (taskData) => {
  axios.post(API, taskData).then(res =>{
  //spread operator,keep existing tasks,adds new one
    setTasks([...tasks,res.data])
  })
 }
 
//DELETE from backend,filters it out of state
const deleteTask = (id) =>{
axios.delete(`${API}/${id}`).then(() => {
  setTasks(tasks.filter(task => task._id !== id))
 })
}

//PUT to backend,updates task in state
const toggleTask = (id, completed) => {
axios.put(`${API}/${id}`, { completed: !completed }).then(res => {
  setTasks(tasks.map(task => task._id === id ? res.data : task))
  })
 }
  
 return (
 <div>
 <h1>FocusFlow</h1>
 <TaskForm onTaskAdded={addTask} />
 <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
 </div>
 )
}

export default App
