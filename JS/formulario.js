function procesa() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let eps = document.getElementById("eps").value;
  let edad = document.getElementById("edad").value;
  let genero = document.querySelector('input[name="genero"]:checked').value;
  let suscripcion = document.getElementById("suscripcion").checked
    ? "Sí"
    : "No";

 // Mostrar los valores procesados en el div de resultado
document.getElementById("respuesta").innerText = `
Nombre: ${nombre}
Apellido: ${apellido}
EPS: ${eps}
Edad: ${edad}
Rango: ${nombre} usted entra en el rango ${procesarEdad(edad)}
Género: ${genero}
Términos: ${suscripcion}
`;

function procesarEdad(edad) {
    switch (true) {
      case edad > 1 && edad < 15:
        return "primera infancia";
      case edad >= 15 && edad < 45:
        return "cotizante";
      case edad >= 45 && edad < 70:
        return "adulto mayor";
      case edad >= 70:
        return "no aplica";
      default:
        return "edad no válida";
    }
  }

}

//funcion limpiar formulario
function limpiarDatos() {
    // Limpiar todos los campos
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("eps").selectedIndex = 0;
    document.getElementById("edad").value = "";
    document.getElementById("masculino").checked = false;
    document.getElementById("femenino").checked = false;
    document.getElementById("suscripcion").checked = false;
    // Limpiar el resultado mostrado
    document.getElementById("respuesta").innerText = "";
  }
