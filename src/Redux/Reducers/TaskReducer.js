import { v4 as uuidv4 } from 'uuid';
const  TaskReducer=(state=[{Id:uuidv4(),Description:"eat",isDone:false},
{Id:uuidv4(),Description:"sleep",isDone:true}],action)=>{
 switch (action.type) {
    case "ADDTASK":
        return [...state,action.payload]
        break;
 

    default:
        return state;
        break;
 }
} 
export default TaskReducer