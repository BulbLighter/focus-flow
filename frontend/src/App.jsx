import { useState, useEffect } from 'react'
import axios from 'axios'
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
  
 return (
 <div>
 <h1>FocusFlow</h1>
 <p>Tasks: {tasks.length}</p>
 </div>
 )
}

export default App
