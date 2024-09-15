import { leer_archivo, escribir_archivo } from "../models/libros_model";

const get_all = (req, res) => {
  let libros = leer_archivo();
  res.status(200).json(libros);
};

const get_librosbyid = (req, res) => {
  let libros = leer_archivo();
  const id_libro = parseInt(req.params.id);
  const libro = libros.find((l) => l.id === id_libro);

  if (libro) {
    res.status(200).json(libro);
  } else {
    res.status(404).json({ message: "No se encontro el libro" });
  }
};
const create_libros = (req, res) => {
  let libros = leer_archivo();
  const nuevo_libro = {
    id: libros.length > 0 ? libros.length + 1 : 1,
    nombre: req.body.nombre,
    autor: req.body.autor,
  };
  libros.push(nuevo_libro);
  escribir_archivo(libros);
  res.status(201).json(nuevo_libro);
};
const update_libros = (req, res) => {
  let libros = leer_archivo();
  const id_libro = parseInt(req.params.id);
  const encontrar_libro = libros.findIndex((l) => l.id === id_libro);

  if (encontrar_libro !== -1) {
    libros[encontrar_libro] = { id: id_libro, ...req.body };
    escribir_archivo(libros);
    res.status(200).json(libros[encontrar_libro]);
  } else {
    res.status(404).json({ message: "No se encontro el libro" });
  }
};
const delete_libros = (req, res) => {
  let libros = leer_archivo();
  const id_libro = parseInt(req.params.id);
  const encontrar_libro = libros.findIndex((l) => l.id === id_libro);

  if (encontrar_libro !== -1) {
    libros.splice(encontrar_libro, 1);
    res.status(204).json({ message: "Libro eliminado correctamente" });
  } else {
    res.status(404).json({ message: "No se encontro el libro" });
  }
};

export { get_all, get_librosbyid, create_libros, update_libros, delete_libros };
