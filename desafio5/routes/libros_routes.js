import express from "express";
import {
  get_all,
  get_librosbyid,
  create_libros,
  update_libros,
  delete_libros,
} from "../controllers/libros_controllers";

const router = express.Router();

app.get("/", get_all);

app.get("/:id", get_librosbyid);

app.post("/", create_libros);

app.put("/:id", update_libros);

app.delete("/:id", delete_libros);
