import { esPrimo } from "./index.cjs";

import dotenv from "dotenv";
dotenv.config();

const numero = process.env.NUMERO; // Asegúrate de que este valor esté definido en el archivo .env
const resultado = esPrimo(numero)
  ? `El número ${numero} es primo.`
  : `El número ${numero} no es primo.`;

console.log(resultado);
