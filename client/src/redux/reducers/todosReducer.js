import * as actionTypes from '../actions/type' 

export const todosReducers = (state = [], action) => {
    
    //console.log('1status: ' + action.status);
    
    const todosByStatus = (todo) => {
        console.log(action.status);
        if (action.status === actionTypes.BACKLOG_TODOS) {
            return { ...todo, backlog: true, InProgress: false, done: false }
        } if (action.status === actionTypes.IN_PROGRESS_TODOS) {
            return { ...todo, backlog: false, InProgress: true, done: false }
        } if (action.status === actionTypes.DONE_TODOS) {
            return { ...todo, backlog: false, InProgress: false, done: true }
        }
    }    
    
    switch(action.type) {
        case actionTypes.ADD_NEW_TODO:
            return [action.payload, ...state]
            
        case actionTypes.GET_ALL_TODOS:
            return action.payload
        
        case actionTypes.DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id)
            
        case actionTypes.UDATE_STATUS_TODO:             
        return state.map(todo => (
                todo._id === action.payload._id ? todosByStatus(todo) : todo
                ))              
        
        default:
            return state;
    }
}