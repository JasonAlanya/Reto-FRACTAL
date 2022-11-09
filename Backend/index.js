import express from 'express';
import cors from 'cors';
import { PORT } from "./config.js";

import cambiarroutes from './routes/manage.routes.js'

const app= express();

app.use(cors());
app.use(express.json())

app.use(cambiarroutes)

app.listen(PORT);
console.log('El servidor está corriendo en el puerto ', PORT)
