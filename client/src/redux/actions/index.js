 import axios from 'axios';
import { ADD_NEW_TODO, GET_ALL_TODOS, DELETE_TODO, UDATE_STATUS_TODO } from './type';

const API_URL = "http://localhost:8000";

export const addNewTodo = (data) => async(dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data });
        dispatch({type: ADD_NEW_TODO, payload: res.data});
    } catch (error) {
        console.log('Error during calling addNewTodo API ', error.message); 
    }
    
}

export const getAllTodos = () => async(dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);
        
        dispatch({type: GET_ALL_TODOS, payload: res.data});
    } catch (error) {
        console.log('Error during calling getAllTodo API ', error.massage);
    }
    
}

export const deleteTodo = (id) => async(dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);
        
        dispatch({type: DELETE_TODO, payload: res.data});
    } catch (error) {
        console.log('Error during calling deleteTodo API ', error.massage);
    }
    
}

export const updateStatusTodo = (id, status) => async(dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}/${status}`);
        
        console.log(res.data);        
        
        dispatch({type: UDATE_STATUS_TODO, payload: res.data, status: status});
    } catch (error) {
        console.log('Error during calling updateStatusTodo API ', error.massage);
    }
    
}