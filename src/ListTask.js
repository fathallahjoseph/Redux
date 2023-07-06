import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = ({li}) => {
  const [x,setx]=useState()
  const tasks=useSelector(state=>state.TaskReducer)
  return (

    <div>
       <div className='card'>
        
{/* all my task  and filter*/}

        {(li=="true")? tasks.filter(el=>el.isDone===true).map(tas=><Task task={tas}/>):
        (li=="false")? tasks.filter(el=>el.isDone===false).map(tas=><Task task={tas}/>):
        tasks.map(tas=><Task task={tas}/>)  }
    </div>
    </div>
  )
}

export default ListTask