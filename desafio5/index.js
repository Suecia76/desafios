import express from "express";
import libros_routes from "./routes/libros_routes";

const app = express();

app.use(express.json());

app.use("/libros", libros_routes);

const port = 3000;

app.listen(port, () => console.log("el servidor esta corriendo"));
