import express from "express";
import Connection from "./database/db.js";
import bodyParser from 'body-parser'

import cors from 'cors';
import Routes from './routes/route.js'

const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', Routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server run on PORT ${PORT}`)); 