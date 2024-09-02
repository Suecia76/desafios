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
