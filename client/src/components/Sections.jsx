import TodoList from "./TodoList";
import { STATUSES } from "../redux/actions/type";

const Sections = () => {  
    
    return (       
        
        STATUSES.map((status, index) => ( 
                <TodoList
                    key={index} 
                    status={status}
                />           
        ))
    ) 
}

export default Sections;