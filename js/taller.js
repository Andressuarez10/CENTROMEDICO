var divtabla = document.getElementById('cuadro')// cuadro dentro de la tabla
var botonregistrar = document.getElementById('btnRegistrar') //Boton registrar
var botoneditar = document.getElementById('btneditar') //boton editar

//creando variables del arreglo
var aCorreo = [],
  aTelefono = [],
  aNombre = [],
  aApellido = [],
  aRadios = [],
  aDocumento = [];

//subiendo datos de local store
if (localStorage.getItem('subir_correo') != null) {
  aCorreo = JSON.parse(localStorage.getItem('subir_correo'));
  aTelefono = JSON.parse(localStorage.getItem('subir_telefono'));
  aNombre = JSON.parse(localStorage.getItem('subir_nombre'));
  aApellido = JSON.parse(localStorage.getItem('subir_apellido'));
  aRadios = JSON.parse(localStorage.getItem('subir_radio'));
  aDocumento = JSON.parse(localStorage.getItem('subir_document'));
}

//crear variables de opciones para mostrar los radios
var opcion1
var opcion2
var opcion3
var opcion4
//crear variable para mostrar texto de los arrays
var infoForm = [];

//funcion registrar
function Registro() {

  //creando variables de cada uno de los imputs
  var bCorreo = document.getElementById('Correo1').value
  var bTelefono = document.getElementById('nTelefono').value
  var bNombre = document.getElementById('tNombre').value
  var bApellido = document.getElementById('tApellido').value
  var radiovalue = document.getElementsByName('nombreradio').value
  var bDocument = document.getElementById('tDocumento').value

  //condicion para mostrar las opcion seleccionada de los radios
  if (opcion1 = document.getElementById('radio1').checked) {
    radiovalue = "CEDULA"
  }
  if (opcion2 = document.getElementById('radio2').checked) {
    radiovalue = "CEDULA DE EXTRANGERIA"
  }
  if (opcion3 = document.getElementById('radio3').checked) {
    radiovalue = "TARJETA DE IDENTIDAD"
  }
  if (opcion4 = document.getElementById('radio4').checked) {
    radiovalue = "OTRO"
  }

  //subiendo las variables a los arrays
  aCorreo.push(bCorreo);
  aTelefono.push(bTelefono);
  aNombre.push(bNombre);
  aApellido.push(bApellido);
  aRadios.push(radiovalue);
  aDocumento.push(bDocument)

  //Guardando los arrays al local storage
  localStorage.setItem('subir_correo', JSON.stringify(aCorreo));
  localStorage.setItem('subir_telefono', JSON.stringify(aTelefono));
  localStorage.setItem('subir_nombre', JSON.stringify(aNombre));
  localStorage.setItem('subir_apellido', JSON.stringify(aApellido));
  localStorage.setItem('subir_radio', JSON.stringify(aRadios));
  localStorage.setItem('subir_document', JSON.stringify(aDocumento));


  //MOstrar local storage

  aCorreo = JSON.parse(localStorage.getItem('subir_correo'));
  aTelefono = JSON.parse(localStorage.getItem('subir_telefono'));
  aNombre = JSON.parse(localStorage.getItem('subir_nombre'));
  aApellido = JSON.parse(localStorage.getItem('subir_apellido'));
  aRadios = JSON.parse(localStorage.getItem('subir_radio'));
  aDocumento = JSON.parse(localStorage.getItem('subir_document'));

  ///validacion de campos requeridos
  if (aCorreo == "" || aTelefono == "" || aNombre == "" || aApellido == "" || aRadios == "" || aDocumento == "") {
    alert("debe ingresar la informacion en todos los campos")

    // Proceso cuando se cumplen los campos requeridos
  } else {

    //tabla
    var tabla = document.getElementById("mitabla1");

    // cantidad de usuarios
    var nCantidadUsuarios = aCorreo.length;

    //Ciclo repetitvo 
    for (var i = 0; i < nCantidadUsuarios; i++) {


      //Onteniedno datos tipo texto para mostrarlos en la taabla
      var nodotxtCorreo = document.createTextNode(aCorreo[i]);
      var nodotxtTelefono = document.createTextNode(aTelefono[i]);
      var nodotxtNombre = document.createTextNode(aNombre[i]);
      var nodotxtApellido = document.createTextNode(aApellido[i]);
      var nodotxtRadios = document.createTextNode(aRadios[i]);
      var nodotxtDocumento = document.createTextNode(aDocumento[i]);

      //////////////////  cambio de formato

      infoForm["id"] = i;

      ////////////////


      //Creando fila

      var nuevaFila = tabla.insertRow(tabla.lenght);

      //Creando celdas y agregandole su valor

      cell1 = nuevaFila.insertCell(0);
      cell1.innerHTML = infoForm.id;

      cell2 = nuevaFila.insertCell(1);
      cell2.appendChild(nodotxtCorreo);

      cell3 = nuevaFila.insertCell(2);
      cell3.appendChild(nodotxtTelefono);

      cell4 = nuevaFila.insertCell(3);
      cell4.appendChild(nodotxtNombre);

      cell5 = nuevaFila.insertCell(4);
      cell5.appendChild(nodotxtApellido);

      cell6 = nuevaFila.insertCell(5);
      cell6.appendChild(nodotxtRadios);

      cell7 = nuevaFila.insertCell(6);
      cell7.appendChild(nodotxtDocumento);

      //Agregando celda Option
      cell8 = nuevaFila.insertCell(7);

      cell8.innerHTML = `<a class="btn btn-center btn-outline-warning mx-5 " onClick="onEdit(this)"><h6>Editar</h6></a>
  
                       <br>
                        <br>
  
      <a class= "btn text-center btn-center btn-outline-danger mx-5 " onClick="onDelete(this)"><h6>Borrar</h6></a>`;


      //Imprimiendo y ordenando filas
      nuevaFila.appendChild(cell1);
      nuevaFila.appendChild(cell2);
      nuevaFila.appendChild(cell3);
      nuevaFila.appendChild(cell4);
      nuevaFila.appendChild(cell5);
      nuevaFila.appendChild(cell6);
      nuevaFila.appendChild(cell7);
      nuevaFila.appendChild(cell8);



      ///limpia el formilario
      document.getElementById("miForm").reset();

    }




  }

  //Informacion despues de llenar el formulario
  alert("Se recomienda actualizar pagina si va a agregar otro formulario :)")

}

//funcion Editar
function onEdit(td) {

  //seleccionar datos
  selectedRow = td.parentElement.parentElement;

  //Condicion para mostrar los datos del local store
  if (localStorage.getItem('subir_correo') != null) {
    aCorreo = JSON.parse(localStorage.getItem('subir_correo'));
    aTelefono = JSON.parse(localStorage.getItem('subir_telefono'));
    aNombre = JSON.parse(localStorage.getItem('subir_nombre'));
    aApellido = JSON.parse(localStorage.getItem('subir_apellido'));
    aRadios = JSON.parse(localStorage.getItem('subir_radio'));
    aDocumento = JSON.parse(localStorage.getItem('subir_document'));
  }


  //Variable y condicion para mostrar y leer los radios
  var radiovalue = document.getElementsByName('nombreradio').value

  if (opcion1 = document.getElementById('radio1').checked) {
    radiovalue = "CEDULA"
  }
  if (opcion2 = document.getElementById('radio2').checked) {
    radiovalue = "CEDULA DE EXTRANGERIA"
  }
  if (opcion3 = document.getElementById('radio3').checked) {
    radiovalue = "TARJETA DE IDENTIDAD"
  }
  if (opcion4 = document.getElementById('radio4').checked) {
    radiovalue = "OTRO"
  }

  //Mostrar elemento de los datos
  document.getElementById("Correo1").value = selectedRow.cells[1].innerHTML;
  document.getElementById("nTelefono").value = selectedRow.cells[2].innerHTML;
  document.getElementById("tNombre").value = selectedRow.cells[3].innerHTML;
  document.getElementById("tApellido").value = selectedRow.cells[4].innerHTML;
  document.getElementsByName('nombreradio').value = selectedRow.cells[5].innerHTML;
  document.getElementById("tDocumento").value = selectedRow.cells[6].innerHTML;


}

//Funcion actualizar fila
function actualizarFila() {

  //creando variables de cada uno de los imputs
  var bCorreo = document.getElementById('Correo1').value
  var bTelefono = document.getElementById('nTelefono').value
  var bNombre = document.getElementById('tNombre').value
  var bApellido = document.getElementById('tApellido').value
  var radiovalue = document.getElementsByName('nombreradio').value
  var bDocumento = document.getElementById('tDocumento').value

  //Variable y condicion para mostrar y leer los radios
  if (opcion1 = document.getElementById('radio1').checked) {
    radiovalue = "CEDULA"
  }
  if (opcion2 = document.getElementById('radio2').checked) {
    radiovalue = "CEDULA DE EXTRANGERIA"
  }
  if (opcion3 = document.getElementById('radio3').checked) {
    radiovalue = "TARJETA DE IDENTIDAD"
  }
  if (opcion4 = document.getElementById('radio4').checked) {
    radiovalue = "OTRO"
  }

  //validar campos requeridos
  if (bCorreo == "" || bTelefono == "" || bNombre == "" || bApellido == "" || radiovalue == "" || bDocumento == "") {
    alert("debe ingresar la informacion en todos los campos")


    // Proceso cuando se cumplen los campos requeridos
  } else {

    //Transformando los datos tipo texto
    infoForm["correo"] = bCorreo;
    infoForm["telefono"] = bTelefono;
    infoForm["nombre"] = bNombre;
    infoForm["apellido"] = bApellido;
    infoForm["radio"] = radiovalue;
    infoForm["documento"] = bDocumento;


    //Editando los datos segun su imput
    selectedRow.cells[1].innerHTML = infoForm.correo;
    selectedRow.cells[2].innerHTML = infoForm.telefono;
    selectedRow.cells[3].innerHTML = infoForm.nombre;
    selectedRow.cells[4].innerHTML = infoForm.apellido;
    selectedRow.cells[4].innerHTML = infoForm.radio;
    selectedRow.cells[6].innerHTML = infoForm.documento;


    //Pasando los datos al arreglo
    aCorreo.push(infoForm.correo);
    aTelefono.push(infoForm.telefono);
    aNombre.push(infoForm.nombre);
    aApellido.push(infoForm.apellido);
    aRadios.push(infoForm.radio);
    aDocumento.push(infoForm.documento);

    //Guardando los datos al arreglo
    localStorage.setItem('subir_correo', JSON.stringify(aCorreo));
    localStorage.setItem('subir_telefono', JSON.stringify(aTelefono));
    localStorage.setItem('subir_nombre', JSON.stringify(aNombre));
    localStorage.setItem('subir_apellido', JSON.stringify(aApellido));
    localStorage.setItem('subir_radio', JSON.stringify(aRadios));
    localStorage.setItem('subir_document', JSON.stringify(aDocumento));


    //Mensaje despues de la edicion
    alert("Fila editada exitosamente");
    //limpia el formulario
    document.getElementById("miForm").reset();
  }

}

//Funcion borrar
function onDelete(td) {
  //Condicion de borrar 
  if (confirm('Estas seguro de esto? si lo borras perderas la informacion')) {

    //borrar celda de la tabla
    row = td.parentElement.parentElement;
    document.getElementById("mitabla1").deleteRow(row.rowIndex);

    //borrar celda del local storage
    localStorage.removeItem('subir_correo', JSON.stringify(aCorreo));
    localStorage.removeItem('subir_telefono', JSON.stringify(aTelefono));
    localStorage.removeItem('subir_nombre', JSON.stringify(aNombre));
    localStorage.removeItem('subir_apellido', JSON.stringify(aApellido));
    localStorage.removeItem('subir_radio', JSON.stringify(aRadios));
    localStorage.removeItem('subir_document', JSON.stringify(aDocumento));




  }



}