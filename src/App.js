
import './App.css';
import Task from './Task';
import ListTask from './ListTask';
import AddTask from './AddTask';
import Filter from './Filter';
import { useSelector } from 'react-redux'
import { useState , useRef} from 'react';
function App() {
  const l=useRef(" ");
  const tasks=useSelector(state=>state.TaskReducer)
  const [li,setli]=useState("");
  const search=()=>{
    setli(l.current.value) 
  }
  return (
<div>
<ListTask/>
<AddTask/>
<Filter  />
</div>
  );
}

export default App;
