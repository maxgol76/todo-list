import { useState } from "react";
import { STATUSES } from "../redux/actions/type";

import { updateStatusTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const StatusSelect = ({todo}) => {
    const getStatusTodo = () => {
        if (todo.backlog) {
            return 0;
        } else if (todo.InProgress) {
            return 1;
        } else {
            return 2;
        }
    }
    
    //console.log(todo);
    
    const [choice, setChoice] = useState(STATUSES[getStatusTodo()]);  
    
    const options = STATUSES.map((status, index) => {
      return <option key={index} value={status}>{status}</option>;
    });
    
    
    
    //console.log(choice);
    
    const dispatch = useDispatch();
    
    const handleStatus = (event) => {
      setChoice(event.target.value);
      dispatch(updateStatusTodo(todo._id, event.target.value));
    };
  
    return (      
        <select value={choice} onChange={handleStatus}>{options}</select>              
    );
  }
  
export default StatusSelect;  