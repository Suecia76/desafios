import fs from "fs";

import path from "path";

const libros_path = path.join(__dirname, "../data/libros.json");

const leer_archivo = () => {
  const info = fs.readFileSync(libros_path, "utf-8");
  return JSON.parse(info);
};

const escribir_archivo = (info) => {
  fs.writeFileSync(libros_path, JSON.stringify(info), "utf-8");
};

export { leer_archivo, escribir_archivo };
