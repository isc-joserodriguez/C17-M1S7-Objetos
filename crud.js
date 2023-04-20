/* Create
Read
Update
Delete */
let agenda = [];

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
  let newNombre = nombre.toLocaleLowerCase().trim().split("");
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
