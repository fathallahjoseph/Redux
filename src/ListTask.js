import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {
  const tasks=useSelector(state=>state.TaskReducer)
  return (

    <div>
       <div className='card'>
  {tasks.map(tas=><Task task={tas}/>)}
    </div>
    </div>
  )
}

export default ListTask