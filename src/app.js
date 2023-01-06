import express from "express";
import cors from "cors";
import postCakesRoute from "./routes/postCakesRoute.js";
import postClientsRoute from "./routes/postClientsRoute.js";
import postOrdersRoute from "./routes/postOrdersRoute.js";
import getOrdersRoute from "./routes/getOrdersRoute.js";
import getOrderByIdRoute from "./routes/getOrderByIdRoute.js";

const server = express();
server.use(cors());
server.use(express.json());
server.use(postCakesRoute);
server.use(postClientsRoute);
server.use(postOrdersRoute);
server.use(getOrdersRoute);
server.use(getOrderByIdRoute);

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server running in port: ${port}`));