<<<<<<< HEAD
import { error } from "console";
import express from "express";

let pelis = [
  "volver al futuro",
  "spiderman",
  "piratas del caribe",
  "ironman",
  "star wars",
];

let productos = [
  { id: 1, nombre: "Producto A", precio: 100 },
  { id: 2, nombre: "Producto B", precio: 150 },
  { id: 3, nombre: "Producto C", precio: 200 },
  { id: 4, nombre: "Producto D", precio: 250 },
  { id: 5, nombre: "Producto E", precio: 300 },
  { id: 6, nombre: "Producto F", precio: 350 },
  { id: 7, nombre: "Producto G", precio: 400 },
  { id: 8, nombre: "Producto H", precio: 450 },
  { id: 9, nombre: "Producto I", precio: 500 },
  { id: 10, nombre: "Producto J", precio: 550 },
];
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Santiago Carrasco");
});
app.get("/materia", (req, res) => {
  res.send("Aplicaciones Hibridas");
});
app.get("/profesor", (req, res) => {
  res.send("Marcos Galban Camila Belén");
});
app.post("/peliculas", (req, res) => {
  let pelicula = req.body;
  if (pelis.indexOf(pelicula.nombre) != -1) {
    return res.status(400).send({
      status: "error",
      error: "Esta pelicula ya se encuentra en sus favoritos",
    });
  } else {
    return res
      .status(404)
      .send({ status: "error", error: "Pelicula no encontrada" });
  }
});

app.get("/productos", (req, res) => {
  const { id, min, max } = req.query;

  if (id) {
    const producto = productos.find((a) => a.id === parseInt(id));
    if (producto) {
      return res.send(producto);
    } else {
      return res
        .status(404)
        .send({ status: "error", error: "Producto no encontrado" });
    }
  }
  let productos_filtrados = productos;
  if (min) {
    productos_filtrados = productos_filtrados.filter(
      (producto) => producto.precio >= parseFloat(min)
    );
  }
  if (max) {
    productos_filtrados = productos_filtrados.filter(
      (producto) => producto.precio <= parseFloat(max)
    );
  }
  res.send(productos_filtrados);
});

app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

app.listen(3000, () => console.log("servidor corriendo"));
=======
const http = require("http");
const os = require("os");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  const method = req.method;

  if (url === "/alumno" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Santiago Carrasco DWN4AV");
  } else if (url === "/info" && method === "GET") {
    const platform = os.platform();
    const arch = os.arch();
    const cpus = os.cpus().length;
    const freemem = os.freemem() / (1024 * 1024);
    const totalmem = os.totalmem() / (1024 * 1024);
    const uptime = os.uptime();

    const data = `Información del sistema operativo:
      - Plataforma: ${platform}
      - Arquitectura: ${arch}
      - Número de CPUs: ${cpus}
      - Memoria libre: ${freemem.toFixed(2)} MB
      - Memoria total: ${totalmem.toFixed(2)} MB
      - Tiempo de actividad: ${uptime.toFixed(0)} segundos`;
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(data);
  } else if (url === "/static" && method === "GET") {
    const data = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Desafio 3</title>
  </head>
  <body>
    <main>
      <h1>Desafio 3</h1>
    </main>
  </body>
</html>
`;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("No se encontro");
  }
});

server.listen(PORT, () => {
  console.log("esta corriendo el servidor");
});
>>>>>>> b0abca8ce7c5488211c3344c9c167719343a612f
