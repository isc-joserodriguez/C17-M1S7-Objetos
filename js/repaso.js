function funciones() {
  const planeta = "Tierra";
  var edad = 16;

  edad = edad + 1; // edad++;

  console.log(planeta, edad);
  //Condicionales
  if (edad >= 18) {
    console.log("Es mayor de edad");
  } else if (edad < 18) {
    console.log("Es menor de edad");
  }

  switch (edad) {
    case 18:
      console.log("Tienes 18");
      break;
    case 26:
      console.log("Tienes 26");
      break;
    default:
      console.log("Tienes otra edad");
  }

  for (var i = 0; i <= 10; i++) {
    // i = i + 1
    console.log(i);
  }

  var listaPrecios = [1, 2, 3, 4, 5, 6]; // su indice inicia en 0;
  console.log(listaPrecios);
  console.log(listaPrecios[5]);

  listaPrecios.pop(); //! Elimina el último elemento
  listaPrecios.push("cadena"); //! Agrega un elemento al final
  console.log(listaPrecios);

  listaPrecios.shift(); //! Elimina el primer elemento
  listaPrecios.unshift("inicio"); //! Agrega un elemento al inicio
  console.log(listaPrecios);

  listaPrecios.splice(1, 2); //! Elimina a partir de un indice, un número de elementos
  console.log(listaPrecios);

  listaPrecios.forEach(function (precio) {
    console.log(precio);
  }); //! Itera un arreglo.

  const listaPreciosModificada = listaPrecios.map(function (precio) {
    return precio + 10;
  }); //! Modifica cada elemento del arreglo con el nuevo return.
  console.log(listaPreciosModificada);

  //! sort - Nos ordena un array
  //! reduce - Reduce el arreglo a un solo elemento
}

// funciones();

// LET vs VAR

/* var iConVar = 0;
function ejemploVar() {
  for (; iConVar < 5; iConVar++) {
    console.log('Dentro del for', iConVar);
  }
  console.log('Dentro de la función', iConVar);
} 
ejemploVar();
console.log('fuera de la función', iConVar); */
/*
//! Agreguen un comentario arriba
function ejemploLet() {
  let iConLet = 100; //camelCase
  for (let iConLet = 0; iConLet < 5; iConLet++) {
    console.log("Dentro del for", iConLet);
  }
  console.log("Dentro de la función", iConLet);
}
ejemploLet();
//console.log('fuera de la función', iConLet);

//String Template
let edad = 10;
let nombre = "Mario";
let apellido = "Sáchez";

console.log(
  "Te llamas " + nombre + " tu apellido es " + apellido + " tu edad es " + edad
);

//! Backtick  `
console.log("Hola");
console.log("Hola");
console.log(`Te llamas: ${nombre} 
Tu apellido es: ${apellido}
Tu edad es: ${edad}`);

// */
