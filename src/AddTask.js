import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Addtask } from './Redux/Action/TaskAction'
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const dispatch=useDispatch()
  const desc=useRef();
  

  return (
    <div>
      <input className='inputs' 
      minlength="10" 
      maxlength="60" 
      size="60" 
      placeholder='Write Description Task'
       type='text'
        ref={desc}
        required/>
    <button onClick={()=>{dispatch(Addtask({Id:uuidv4(),Description:desc.current.value,isDone:false}))}}>Add Task</button>
    </div>
  )
}

export default AddTask