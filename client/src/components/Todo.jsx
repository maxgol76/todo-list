import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";
import StatusSelect from "./StatusSelect";

const Todo = ({todo}) => {
    
    const dispatch = useDispatch();

    return (
        <li className="task">
            <span>{todo.data}</span>            
            <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                X
            </span>  
            <span className="icon">
                <StatusSelect                    
                    todo={todo}
                />
            </span>
        </li>
    )
}

export default Todo;