import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    
    const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@db-todo.fsbmusp.mongodb.net/?retryWrites=true&w=majority`;
    
    mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    
    mongoose.connection.on('connected', () => {
        console.log('Database connected Success!');
    })
    
    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected!');
    })
    
    mongoose.connection.on('error', () => {
        console.log('Error during connecting with the database:', error.message);
    })
} 

export default Connection;