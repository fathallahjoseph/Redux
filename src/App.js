
import './App.css';//imp css
import ListTask from './ListTask';//imp list task to view
import AddTask from './AddTask';//imp addtask inp+btn
import Filter from './Filter';//imp my filter inp+btn
import { useState , useRef} from 'react';//imp usestate + useref
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
  {/* list task + props li */}
<ListTask li={li} />
{/* addtask */}
<AddTask/>
{/* filter + props l/search */}
<Filter l={l} search={search} />
</div>
</div>
  );
}

export default App;
