import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Addtask } from './Redux/Action/TaskAction'
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const dispatch=useDispatch()
  const desc=useRef();
  

  return (
    <div><input placeholder='description' type='text' ref={desc}/>
    <button onClick={()=>{dispatch(Addtask({Id:uuidv4(),Description:desc.current.value,isDone:false}))}}>Add TASK</button>
    </div>
  )
}

export default AddTask