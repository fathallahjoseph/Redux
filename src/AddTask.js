import React, { useRef, useState } from 'react'//imp useref + use state
import { useDispatch } from 'react-redux'// imp disp to make action
import { Addtask } from './Redux/Action/TaskAction'
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const dispatch=useDispatch()
  const desc=useRef();
  

  return (
    <div>
      {/* inputs to add a task's*/}
      <input className='inputs' 
      minlength="10" 
      maxlength="60" 
      size="60" 
      placeholder='Write Description Task'
       type='text'
        ref={desc}
        required/>
        {/* btn to add a task's after writing him in inputs*/}
    <button onClick={()=>{dispatch(Addtask({Id:uuidv4(),Description:desc.current.value,isDone:false}))}}>Add Task</button>
    </div>
  )
}

export default AddTask