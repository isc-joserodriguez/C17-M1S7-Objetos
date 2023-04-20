/*
Create
Delete 
Read
Update
*/
let agenda = [
  {
    id: 2,
    nombre: "MAria",
    apellido: "Pérez",
    dob: "10/10/2020",
    numeroTel: "131231312312",
    email: "hola@hola.com",
    numeroDoc: "doc",
  },
  {
    id: 1,
    nombre: "Pedro",
    apellido: "Pérez",
    dob: "10/10/2020",
    numeroTel: "131231312312",
    email: "hola@hola.com",
    numeroDoc: "doc",
  },
  {
    id: 3,
    nombre: "Juan",
    apellido: "Pérez",
    dob: "10/10/2020",
    numeroTel: "131231312312",
    email: "hola@hola.com",
    numeroDoc: "doc",
  },
];

function agregarContacto(
  id,
  nombre,
  apellido,
  fechaNac,
  numeroTel,
  email,
  numeroDoc
) {
  // if (!numeroTel || !nombre) throw new Error("Hey, falta el teléfono");
  let newNombre = nombre
    .toLocaleLowerCase()
    .trim() //te quita los espacios al inicio y al final
    .split("");
  newNombre[0] = newNombre[0].toUpperCase();
  agenda.push({
    id, //La key lleva el mismo nombre que la variable que se le asigna, no es necesario poner ambos.
    nombre: newNombre.join(""),
    apellido,
    dob: fechaNac,
    numeroTel,
    email,
    numeroDoc: numeroDoc, //EJEMPLO
  });
}

function eliminarContacto(id) {
  /* 
//1.- Buscar al usuario por ID
//2.- Eliminar al usuario
1.- Filtrar usuario
3.- Actualizar variable glboal
 */
  agenda = agenda.filter(function (contacto) {
    return contacto.id !== id;
  });
}

function editarPropiedadContacto(id, indiceDelObjetoAEditar, nuevoValor) {
  //Buscando el índice del usuario que queremos modificar
  const indiceArrayUsuarioBuscado = agenda.findIndex(function (contacto) {
    return contacto.id === id;
  });
  // Utilizando el indice, obtenemos el elemento de la agenda que vamos a modificar
  // agenda[indice] => Nos devuelve un elemento en un índice específico.
  // agenda[indice][subindice] => Nos devuelve una propiedad (valor) del elemnto en un índice específico.
  agenda[indiceArrayUsuarioBuscado][indiceDelObjetoAEditar] = nuevoValor;
}

function editarContacto(id, nuevosValores) {
  //Buscando el índice del usuario que queremos modificar
  const indiceArrayUsuarioBuscado = agenda.findIndex(function (contacto) {
    return contacto.id === id;
  });
  // Utilizando el indice, obtenemos el elemento de la agenda que vamos a modificar
  // agenda[indice] => Nos devuelve un elemento en un índice específico.
  // agenda[indice][subindice] => Nos devuelve una propiedad (valor) del elemnto en un índice específico.
  agenda[indiceArrayUsuarioBuscado] = {
    //SPREAD
    ...agenda[indiceArrayUsuarioBuscado],
    ...nuevosValores,
  };
}
