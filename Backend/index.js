import express from "express";
import cors from "cors";
import { PORT } from "./config.js";

import cambiarroutes from "./routes/manage.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(cambiarroutes);

app.listen(PORT);
console.log("The server is in the PORT: ", PORT);
