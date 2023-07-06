import React from 'react'//imp react 
const Task = ({task}) => {
  return (
    <div>
     {task.Description}
     {(task.isDone)? "done": "not done"}
    </div>
  )
}

export default Task