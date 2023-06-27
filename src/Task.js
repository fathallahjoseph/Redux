import React from 'react'
import ListTask from './ListTask'

const Task = ({task}) => {
  return (
    <div>
     {task.Description}
     {(task.isDone)? "done": "not done"}
    </div>
  )
}

export default Task