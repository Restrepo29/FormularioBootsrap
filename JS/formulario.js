function procesa() {
    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let eps = document.getElementById("eps").value;   
 let edad = document.getElementById("edad").value;
  let genero = document.querySelector('input[name="genero"]:checked').value;
    let suscripcion = document.getElementById("suscripcion").checked ? "Sí" : "No";


 // Mostrar los valores procesados en el div de resultado
  document.getElementById("respuesta").innerText = 
  "Nombre: " + nombre + "\n" +
  "Apellido: " + apellido + "\n" +
  "Eps: " + eps + "\n" +
  "Edad: " + edad +"\n" +
  "Rango: "+nombre +" "+ "usted entra en el rango"+" "+ (procesarEdad(edad))+"\n" +
  "Género: " + genero + "\n" +
  "Términos: " + suscripcion;
}




function procesarEdad(edad){

    if(edad>1 && edad<15){
       
        
        return "primera infancia";

       }if(edad>=15 && edad<45){
        return "cotizante";
    } if(edad>=45 && edad<70){
        return "adulto mayor";
    }  if(edad>=70)
    {
        return "no aplica";
    }
}



console.log(procesarEdad(34))

//funcion limpiar formulario
function limpiarDatos() {
    // Limpiar todos los campos
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("eps").selectedIndex = 0;
    document.getElementById("edadd").value = "";
    document.getElementById("masculino").checked =false;
    document.getElementById("femenino").checked = false;
    document.getElementById("suscripcion").checked = false;
   

    // Limpiar el resultado mostrado
    document.getElementById("respuesta").innerText = "";
}

