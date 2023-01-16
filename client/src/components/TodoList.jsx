import { useEffect } from "react";
import { getAllTodos } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { BACKLOG_TODOS, DONE_TODOS, IN_PROGRESS_TODOS } from "../redux/actions/type";


const TodoList = ({status}) => {
    const dispatch = useDispatch();
    
    const todos = useSelector(state => state.todos)
    
    useEffect(() => {
        dispatch(getAllTodos());
    }, [])
    
    const todosByStatus = () => {
        if (status === BACKLOG_TODOS) {
            return todos.filter(todo => todo.backlog)
        } if (status === IN_PROGRESS_TODOS) {
            return todos.filter(todo => todo.InProgress)
        } if (status === DONE_TODOS) {
            return todos.filter(todo => todo.done)
        }
    }
    
    return (
        <article>
            <h3>{status}</h3>            
            <ul>
                {
                    todosByStatus().map(todo => (                        
                        <Todo
                            key={todo._id}
                            todo={todo}                         
                        />
                    ))
                }
            </ul>
        </article>
    )
}

export default TodoList;