
import './App.css';
import ListTask from './ListTask';
import AddTask from './AddTask';
import Filter from './Filter';
import { useState , useRef} from 'react';
function App() {
  const l=useRef();
  const [li,setli]=useState("");
  const search=()=>{
    setli(l.current.value) 
  }
  return (
    <div id='tt'>
      <h1 id='h1'>My Task's</h1>
<div id='aa'>
<ListTask li={li} />
<AddTask/>
<Filter l={l} search={search} />
</div>
</div>
  );
}

export default App;
