import express from "express";
import cors from "cors";
import postCakesRoute from "./routes/postCakesRoute.js"

const server = express();
server.use(cors());
server.use(express.json());
server.use(postCakesRoute);

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server running in port: ${port}`));