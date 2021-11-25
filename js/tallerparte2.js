var botonAgendar = document.getElementById('btnagendar');// boton agendar

//creando variables del arreglo
var aNomape = [],
  aIde = [],
  aOpcion = [],
  aAGenda = [],
  aDireccion = [];

  //crear variables de opciones para mostrar los radios
 var opcion1
 var opcion2
 var opcion3

 //funcion agendar
 function agendar() {
 
   //creando variables de cada uno de los imputs
  var bNomape = document.getElementById('txtNomApe').value
  var bIde = document.getElementById('nId').value
  var bOpcion = document.getElementsByName('opciones').value
  var bAgenda = document.getElementById('datepicker').value
  var bDireccion = document.getElementById('txtDireccion').value
  
   //condicion para mostrar las opcion seleccionada de los radios
  if (opcion1 = document.getElementById('option1').checked) {
    bOpcion = "Oncología Clínica - Dr. Fredy Osorio Donado."
  }
  if (opcion2 = document.getElementById('option2').checked) {
    bOpcion = "Medicina Interna y Hematología - Dr. Ricardo Romero Villa."
  }
  if (opcion3 = document.getElementById('option3').checked) {
    bOpcion = "Medicina Externa y Hepatología - Dra. Sol Palacios Iriarte."
  }

 ///validacion de campos requeridos

 if (bNomape == "" || bIde == "" || bOpcion == "" || bAgenda == "" || bDireccion == "") {

  alert("debe ingresar la informacion en todos los campos")



  // Proceso cuando se cumplen los campos requeridos

} else {

//subiendo las variables a los arrays

aNomape.push(bNomape);

aIde.push(bIde);

aOpcion.push(bOpcion);

aAGenda.push(bAgenda);

aDireccion.push(bDireccion);



//Guardando los arrays al local storage

localStorage.setItem('subir_nomape', JSON.stringify(aNomape));

localStorage.setItem('subir_ide', JSON.stringify(aIde));

localStorage.setItem('subir_opcion', JSON.stringify(aOpcion));

localStorage.setItem('subir_agenda', JSON.stringify(aAGenda));

localStorage.setItem('subir_direccion', JSON.stringify(aDireccion));



//Mensaje despues de agendar cita

alert("Gracias por agendar su cita Vuelva pronto :)")

 ///limpia el formilario

 document.getElementById("miForm1").reset();

}



}
//Funcion procesar

function procesar() {

  //mensaje despues de procesar

  alert("Gracias por realizar la encuesta tu opinion salvara muchas vidas :3")



   

}