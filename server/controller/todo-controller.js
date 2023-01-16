import { request, response } from "express";
import Todo from "../model/Todo.js";
//import { BACKLOG_TODOS, DONE_TODOS, IN_PROGRESS_TODOS } from "../../client/src/redux/actions/type";


export const addTodo = async ( req, res ) => {
        try {
            const newTodo = await Todo.create({
                data: req.body.data,
                createdAt: Date.now()
            })
            
            await newTodo.save();
            
            return res.status(200).json(newTodo);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
export const getAllTodos = async ( req, res ) => {
    try {
        const todos = await Todo.find({}).sort({ createdAt: -1 })
        
        return res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const deleteTodo = async ( req, res ) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const updateStatusTodo = async ( req, res ) => {
    
    const todosByStatus = () => {
        //console.log(req.params.status);
        if (req.params.status === 'Backlog') {
            return { backlog: true, InProgress: false, done: false } 
        } if (req.params.status === 'In Progress') {
            return { backlog: false, InProgress: true, done: false } 
        } if (req.params.status === 'Done') {
            return { backlog: false, InProgress: false, done: true } 
        }
    }
    
    try {    
        const todo = await Todo.findOneAndUpdate(
            { _id: req.params.id },
            todosByStatus()                       
            );
        
        await todo.save();
        
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}