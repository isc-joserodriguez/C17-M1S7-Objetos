//! Objetos

let lista = [1, 2, 3, 4, 5, 6];
let objeto = {
  nombre: "Mauricio",
  "apellido materno": "Sánchez",
  "apellido paterno": "Pérez",
  indice: "Valor",
  cero: {
    indiceArreglo: [
      1,
      2,
      3,
      4,
      {
        otroIndice: ["hola"],
      },
    ],
  },
};

let indice = "apellido paterno";
console.log(lista[2]);
console.log(objeto.nombre);
console.log(objeto[indice]);
console.log(objeto["apellido materno"]);
console.log(objeto);

objeto.cero = []; //! Reemplazamos valores, haciendo referencia a un indice
delete objeto.nombre; //! borramos un indice
objeto.nuevaKey = "Nuevo Valor"; //! Si no existe el indice, lo agrega. Si ya existe, lo reemplaza

//! JSON - JavaScript Object Notation.

console.log(objeto);
const indicesValores = Object.entries(objeto);
const indicesObjeto = Object.keys(objeto);

//iteración del Entries
indicesValores.forEach(function ([indice, valor]) {
  if (indice === "apellido paterno" && valor === "Pérez") {
    console.log("Usuario encontrado");
  }
});

// iteración de los keys
indicesObjeto.forEach(function (indice) {
  if (indice === "apellido paterno" && objeto[indice] === "Pérez") {
    console.log("Usuario encontrado");
  }
});

for (let indice in objeto) {
  if (objeto[indice] === "Pérez") {
    console.log("Usuario encontrado");
    delete objeto[indice];
  }
}

console.log(objeto);

//! Desestructuraciones
//! Desestructuraciones de arrays
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; /* 
let elemento0 = array[0];
let elemento1 = array[1];
let elemento2 = array[2];
let elemento3 = array[3];*/

let [var1, var2, var3] = array;
console.log(var1);
console.log(var2);
console.log(var3);

//! Desestructuraciones
//! Desestructuraciones de objetos
let otroObjet = {
  nombre: "Pedro",
  apellido: "Sam",
  edad: 20,
}; /* 
let nombre = otroObjet.nombre;
let apellido = otroObjet.apellido;
let edad = otroObjet.edad;*/

let { nombre, apellido, edad } = otroObjet;
console.log(nombre);
console.log(apellido);
console.log(edad);

const listaUsuarios = [
  {
    nombre: "Pedro",
    apellido: "Sam",
    edad: 20,
  },
  {
    nombre: "Maria",
    apellido: "Sam",
    edad: 20,
  },
  {
    nombre: "Salomon",
    apellido: "Sam",
    edad: 20,
  },
];
