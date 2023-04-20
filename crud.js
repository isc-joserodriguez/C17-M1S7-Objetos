/* Create
Read
Update
Delete */
const agenda = [];

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
  let newNombre = nombre.toLocaleLowerCase().trim().split('')
  newNombre[0] = newNombre[0].toUpperCase();
  agenda.push({
    id, //La key lleva el mismo nombre que la variable que se le asigna, no es necesario poner ambos.
    nombre: newNombre.join(''),
    apellido,
    dob: fechaNac,
    numeroTel,
    email,
    numeroDoc: numeroDoc, //EJEMPLO
  });
}
