let main = document.querySelector("main");
let button = document.querySelector("#numero");
let btn_borrar = document.querySelector("#borrar");
let primos = function () {
  let comprobacion = document.querySelector(".error");
  if (comprobacion) {
    comprobacion.classList = "p";
    comprobacion.innerText = "";
    let num = prompt("Ingrese un numero y determinare si es primo o no");
    let par = 2;
    let impar = 3;
    let respuesta = "";
    if (num % par != 0 && num % impar != 0) {
      respuesta = `El numero ${num} es compuesto`;
    } else if (num == null) {
      respuesta = "ingrese un numero valido";
      p.classList = "error";
    } else {
      respuesta = `El numero ${num} es primo`;
    }
    comprobacion.innerText = respuesta;
  } else {
    let p = document.createElement("p");
    p.classList = "p";
    main.appendChild(p);
    p.innerText = "";
    let num = prompt("Ingrese un numero y determinare si es primo o no");
    let par = 2;
    let impar = Math.sqrt(num);
    let respuesta = "";
    /*for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          
          break;
        }
      }*/
    if (num % par === 0 && num % impar === 0) {
      respuesta = `El numero ${num} es compuesto`;
    } else if (num == null) {
      respuesta = "ingrese un numero valido";
      p.classList = "error";
    } else {
      respuesta = `El numero ${num} es primo`;
    }
    p.innerText = respuesta;
  }
};

let borrar = function () {
  let existe = document.querySelector(".p");
  if (!existe) {
    let comprobacion_error = document.querySelector(".error");
    if (!comprobacion_error) {
      let p = document.createElement("p");
      p.innerText = "";
      p.classList = "error";
      main.appendChild(p);
      p.innerText =
        "No puede borrar algo que no esta, porfavor ingrese un numero primero";
    }
  } else {
    existe.innerText = "";
  }
};
button.addEventListener("click", primos);
btn_borrar.addEventListener("click", borrar);

module.exports = { primos, borrar };
