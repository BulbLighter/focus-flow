function TaskList({ tasks, onDelete, onToggle }){
    if (tasks.length === 0) {
     return <p>No tasks yet. Add one above!</p>
    }
    //map loops through every task and renders it
    //id - react needs unique key for each list item
    //line-through is for striking through completed tasks
    return(
    <ul>
    {tasks.map(task => (
    <li key={task._id}>
    <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
     >
     
     {task.title} - {task.priority}
     </span>
     <button onClick={() => onToggle(task._id, task.completed)}>
        {task.completed ? 'Undo' : 'Done'}
     </button>
     <button onClick={() => onDelete(task._id)}>
     Delete
     </button>
     </li>
     ))}
     </ul>
    )
   }
   
   export default TaskList