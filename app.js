import express from "express";
import {router as adviceRoute} from "./src/routes/request.route.js";

const app = express();
const port = Number(process.env.PORT) || 8080

app.use(express.json());

app.use('/api/v1/advice', adviceRoute)


app.listen(port, ()=> console.log(`Server is listening on PORT ${port}...`))
