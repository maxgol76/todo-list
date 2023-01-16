import express, { response } from "express";
import { addTodo, getAllTodos, deleteTodo, updateStatusTodo } from "../controller/todo-controller.js";

const route = express.Router();

route.post('/todos', addTodo);
route.get('/todos', getAllTodos);
route.delete('/todos/:id', deleteTodo);
route.get('/todos/:id/:status', updateStatusTodo);

// route.post('/todos', ( req, res ) => {
//     console.log(req.body);
// })

export default route;